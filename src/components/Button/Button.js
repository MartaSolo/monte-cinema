import "./Button.scss";

const Button = ({ className, type, disabled, onClick, text }) => {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
