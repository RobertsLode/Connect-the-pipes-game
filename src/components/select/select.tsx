import './select.scss';

type selectProps = {
    selectedLevel: number | undefined
    onSelectLevel: (value: number) => void
    text: string
    levels: number[]
};
const Select = ({
  selectedLevel, onSelectLevel, text, levels,
}: selectProps) => (
  <div>
    <select
      className="select form-select"
      value={selectedLevel}
      onChange={(e) => onSelectLevel(Number(e.target.value))}
    >

      <option
        selected
        disabled
      >

        {text}

      </option>

      {levels.map((item:number) => (
        <option
          key={item}
          value={item}
        >

          {item}

        </option>
      ))}
    </select>
  </div>
);

export default Select;
