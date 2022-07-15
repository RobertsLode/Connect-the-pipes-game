import uniqueId from 'uniqid';
import { figurePropsMainArray, figureProps } from '../data/figures';
import './pipeField.scss';

type pipeFieldProps = {
    pipeMap: figurePropsMainArray | undefined
    onPipeClick: (value: string) => void

};
export const PipeField = ({ pipeMap, onPipeClick }: pipeFieldProps) => (
  <div className={pipeMap ? 'pipe--map' : ''}>
    {pipeMap?.map((pipeYArray:figureProps[], pipeYIndex:number) => (
      <div
        key={uniqueId()}
        className="pipe--y-array"
      >

        {pipeYArray.map((pipeXArray:figureProps, pipeXIndex: number) => (
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
