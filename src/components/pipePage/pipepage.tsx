import '../../styles/reset.scss';
import './pipepage.scss';
import { useEffect, useState } from 'react';
import levels from '../data/levels';
import figures from '../data/figures';
import { FigurePropsMainArray } from '../models/models';
import Button from '../button/button';
import Select from '../select/select';
import PipeField from '../pipeField/pipeField';
import sewerImg from '../images/sewer.jpg';

const response = new WebSocket('wss://hometask.eg1236.com/game-pipes/');

const pipePage = () => {
  const [pipeMap, setPipemap] = useState<FigurePropsMainArray>();
  const [selectedLevel, setSelectedLevel] = useState<number>();
  const [verifyPipeMap, setVerifyPipeMap] = useState<string | undefined>('');
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const isReady = response.readyState === 1;

  const handleResponse = (value: string) => {
    response.send(value);

    response.onmessage = ({ data }) => {
      if (value === 'map') {
        const modifyMap = data
          .slice(4)
          .split('\n')
          .filter((item:string) => item !== '');

        const newMap: FigurePropsMainArray = modifyMap.map((pipeArray:string) => pipeArray
          .split('')
          .map((pipe:string) => figures.find((item) => item.pipe === pipe)));

        setPipemap(newMap);
      } else if (value.includes('rotate')) {
        handleResponse('map');
      } else if (value === 'verify' && data) {
        const verifyResponse = data.split(' ').pop();
        setVerifyPipeMap(verifyResponse);
      }
    };
  };

  const handleSelectLevel = (level: number | undefined) => {
    handleResponse(`new ${level}`);
    handleResponse('map');
    setAttemptsLeft(10);
    setVerifyPipeMap('');
  };

  useEffect(() => {
    if (isReady) {
      handleSelectLevel(selectedLevel);
    }
  }, [selectedLevel]);

  return (
    <div className="pipe--game-main">
      <img
        src={sewerImg}
        alt="sewer background"
        className="general--background"
      />
      <div className="pipe--game-select-and-button">
        <Select
          selectedLevel={selectedLevel}
          text="Select level"
          levels={levels}
          onSelectLevel={setSelectedLevel}
        />
        <Button
          onClick={() => {
            handleResponse('verify');
            setAttemptsLeft(attemptsLeft - 1);
          }}
          text="Check if correct /"
          loaded={isReady}
          triesLeft={attemptsLeft}
        />
        <Button
          onClick={() => {
            handleSelectLevel(selectedLevel);
            setVerifyPipeMap('');
          }}
          text="Reset"
          loaded={isReady}
          triesLeft=""
        />
        <span
          className="pipe--game-verifypipemap"
        >
          {verifyPipeMap}
        </span>
      </div>
      <PipeField
        pipeMap={pipeMap || []}
        selectedLevel={selectedLevel}
        onPipeClick={(value) => {
          handleResponse(value);
        }}
      />
    </div>
  );
};

export default pipePage;
