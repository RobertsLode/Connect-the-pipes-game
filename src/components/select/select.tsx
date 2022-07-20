import './select.scss';

type SelectProps = {
    selectedLevel?: number
    onSelectLevel: (value: number) => void
    text: string
    levels: number[]
};

const Select = ({
  selectedLevel, text, levels, onSelectLevel,
}: SelectProps) => (
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
