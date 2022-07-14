type buttonProps = {
    text: string
    onClick: () => void
    loaded: boolean
    triesLeft: number | string
};
const Button = ({
  text, onClick, loaded, triesLeft,
}: buttonProps) => (
  <button
    className={triesLeft === 0 || !loaded ? 'btn btn-secondary' : 'btn btn-warning'}
    onClick={() => {
      onClick();
    }}
    disabled={triesLeft === 0 || !loaded}
  >
    {`${text}  ${triesLeft}`}
  </button>
);

export default Button;
