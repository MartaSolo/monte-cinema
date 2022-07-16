import "./FormWrapper.scss";

const FormWrapper = ({ children }) => {
  return (
    <div className="register_wrapper">
      <>{children}</>
    </div>
  );
};

export default FormWrapper;
