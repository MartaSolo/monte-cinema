import "./Input.scss";

const Input = ({
  divClassName,
  labelClassName,
  htmlFor,
  label,
  inputClassName,
  inputType,
  id,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className={divClassName}>
      <label className={labelClassName} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={inputClassName}
        type={inputType}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
    </div>
  );
};

export default Input;
