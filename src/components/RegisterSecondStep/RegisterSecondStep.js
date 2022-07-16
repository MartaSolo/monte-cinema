import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import "./RegisterSecondStep.scss";

const RegisterSecondStep = ({ step }) => {
  return (
    <div className="register__step--second">
      <RegisterStepTitle title="Great!" subtitle="Now your name" />
      <FormWrapper>
        <>Inputs step two</>
        <>Inputs step two</>
        <>Inputs step two</>
      </FormWrapper>
    </div>
  );
};

export default RegisterSecondStep;
