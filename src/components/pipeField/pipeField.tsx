import { figurePropsMainArray, figureProps } from '../data/figures';
import './pipeField.scss';

type pipeFieldProps = {
    pipeMap: figurePropsMainArray | undefined
    onButtonClick: (value: string) => void

};
export const PipeField = ({ pipeMap, onButtonClick }: pipeFieldProps) => (
  <div className={pipeMap ? 'pipeMap' : ''}>
    {pipeMap?.map((pipeString:figureProps[], pipeMapIndex:number) => (
      <div
        key={Math.random()}
        className="pipestring"
      >

        {pipeString.map((item:figureProps, pipeIndex: number) => (
          <div
            className="pipe--box"
            onClick={() => {
              onButtonClick(`rotate ${pipeIndex} ${pipeMapIndex}`);
            }}
            key={Math.random()}
          >

            <img
              className="pipe"
              style={item?.rotate ? { transform: `rotate(${item.rotate}deg)` } : {}}
              src={item?.img}
              alt={item?.pipe}
            />

          </div>
        ))}
      </div>

    ))}
  </div>
);

export default PipeField;
