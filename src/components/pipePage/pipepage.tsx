import '../../styles/reset.scss';
import './pipepage.scss';
import { useEffect, useState } from 'react';
import levels from '../data/levels';
import figures, { figurePropsMainArray } from '../data/figures';
import Button from '../button/button';
import Select from '../select/select';
import PipeField from '../pipeField/pipeField';
import sewerImg from '../images/sewer.jpg';

const response = new WebSocket('wss://hometask.eg1236.com/game-pipes/');

const pipePage = () => {
  const [pipeMap, setPipemap] = useState<figurePropsMainArray>();
  const [selectedLevel, setSelectedLevel] = useState<number>();
  const [done, setDone] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(10);

  const handleButtonClick = (value: string) => {
    response.send(value);

    response.onmessage = ({ data }) => {
      if (value === 'map') {
        const modifyMap = data
          .slice(4)
          .split('\n')
          .filter((item:string) => item !== '');

        const Map = modifyMap.map((pipeArray:string) => pipeArray
          .split('')
          .map((pipe:string) => figures.find((item) => item.pipe === pipe)));

        setPipemap(Map);
      } else if (value.includes('rotate')) {
        handleButtonClick('map');
      } else if (value === 'verify') {
        setDone(data.split(' ').pop());
      }
    };
  };

  const handleSelectLevel = (level: number | undefined) => {
    handleButtonClick(`new ${level}`);
    handleButtonClick('map');
    setAttemptsLeft(10);
    setDone('');
  };

  useEffect(() => {
    if (response.readyState === 1) {
      handleSelectLevel(selectedLevel);
    }
  }, [selectedLevel]);

  return (
    <div className="pipe--game-main">

      <img
        src={sewerImg}
        alt=""
        className="background"
      />

      <div className="pipe--game-select-and-button">

        <Select
          selectedLevel={selectedLevel}
          text="Select level"
          levels={levels}
          onSelectLevel={(value) => {
            setSelectedLevel(value);
          }}
        />

        <Button
          onClick={() => {
            handleButtonClick('verify');
            setAttemptsLeft(attemptsLeft - 1);
          }}
          text="Check if correct /"
          loaded={response.readyState === 1}
          triesLeft={attemptsLeft}
        />

        <Button
          onClick={() => {
            handleSelectLevel(selectedLevel);
            setDone('');
          }}
          text="Reset"
          loaded={response.readyState === 1}
          triesLeft=""
        />

        <span
          className="pipe--game-done"
        >
          {done}
        </span>

      </div>

      <PipeField
        pipeMap={pipeMap}
        onButtonClick={(value) => {
          handleButtonClick(value);
        }}
      />
    </div>
  );
};

export default pipePage;
