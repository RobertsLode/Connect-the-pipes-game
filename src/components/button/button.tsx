type ButtonProps = {
    text: string
    onClick: () => void
    loaded: boolean
    triesLeft: number | string
};

const Button = ({
  text, loaded, triesLeft, onClick,
}: ButtonProps) => (
  <button
    className={
      triesLeft === 0 || !loaded ? 'btn btn-secondary' : 'btn btn-warning'
} // dry, saīsināt
    onClick={onClick}
    disabled={triesLeft === 0 || !loaded}
  >
    {`${text}  ${triesLeft}`}
  </button>
);

export default Button;
