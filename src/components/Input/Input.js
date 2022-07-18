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
  placeholder,
  pattern,
  value,
  onChange,
  onBlur,
  children,
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
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {children}
    </div>
  );
};

export default Input;
