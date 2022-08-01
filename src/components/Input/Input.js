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
  value,
  onChange,
  onFocus,
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
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {children}
    </div>
  );
};

export default Input;

// import "./Input.scss";

// const Input = ({
//   divClassName,
//   labelClassName,
//   htmlFor,
//   label,
//   inputClassName,
//   inputType,
//   id,
//   name,
//   placeholder,
//   value,
//   onChange,
//   children,
// }) => {
//   return (
//     <div className={divClassName}>
//       <label className={labelClassName} htmlFor={htmlFor}>
//         {label}
//       </label>
//       <input
//         className={inputClassName}
//         type={inputType}
//         id={id}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       />
//       {children}
//     </div>
//   );
// };

// export default Input;
