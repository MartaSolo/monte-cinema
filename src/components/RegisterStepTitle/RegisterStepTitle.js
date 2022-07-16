import "./RegisterStepTitle.scss";

const RegisterStepTitle = ({ title, subtitle }) => {
  return (
    <div className="register__title">
      <h1 className="register__title--title">{title}</h1>
      <h2 className="register__title--subtitle">{subtitle}</h2>
    </div>
  );
};

export default RegisterStepTitle;
