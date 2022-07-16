import RegisterStepTitle from "../RegisterStepTitle";
import "./RegisterSuccess.scss";

const RegisterSuccess = () => {
  return (
    <div className="register__step--success">
      <RegisterStepTitle title="Great job Georgia!" />
      <p className="register__step--message">
        We have sent you an email to
        <span className="register__user--email">
          {" "}
          goerogia.swanson@monterail.com.
        </span>{" "}
        Make sure to click the link from the message to activate your account.
      </p>
    </div>
  );
};

export default RegisterSuccess;
