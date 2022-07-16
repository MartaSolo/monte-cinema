import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import "./RegisterFirstStep.scss";

const RegisterFirstStep = ({ step }) => {
  return (
    <div className="register__step--first">
      <RegisterStepTitle title="Ahoy you!" subtitle="Care to register?" />
      <FormWrapper>
        <div>Inputs step one</div>
      </FormWrapper>
    </div>
  );
};

export default RegisterFirstStep;
