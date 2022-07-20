import uniqueId from 'uniqid';
import { FigurePropsMainArray } from '../models/models';
import './pipeField.scss';

type PipeFieldProps = {
    pipeMap: FigurePropsMainArray | []
    selectedLevel: number | undefined
    onPipeClick: (value: string) => void
};

export const PipeField = ({ pipeMap, selectedLevel, onPipeClick }: PipeFieldProps) => (
  <div className={selectedLevel ? 'pipe--map' : ''}>
    {pipeMap?.map((pipeYArray, pipeYIndex:number) => (
      <div
        key={uniqueId()}
        className="pipe--y-array"
      >
        {pipeYArray.map((pipeXArray, pipeXIndex: number) => (
          <div
            className="pipe--x-array"
            onClick={() => {
              onPipeClick(`rotate ${pipeXIndex} ${pipeYIndex}`);
            }}
            key={uniqueId()}
          >
            <img
              className="pipe"
              style={pipeXArray?.rotate ? { transform: `rotate(${pipeXArray.rotate}deg)` } : {}}
              src={pipeXArray?.img}
              alt={pipeXArray?.pipe}
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default PipeField;
