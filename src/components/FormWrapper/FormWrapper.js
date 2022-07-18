import "./FormWrapper.scss";

const FormWrapper = ({ children }) => {
  return (
    <div className="register__wrapper">
      <>{children}</>
    </div>
  );
};

export default FormWrapper;
