import RegisterStepTitle from "../RegisterStepTitle";
import Anchor from "../Anchor";
import "./RegisterSuccess.scss";

const RegisterSuccess = ({ newUser }) => {
  return (
    <div className="register__step--success">
      <RegisterStepTitle title={`Great job ${newUser.name}!`} />
      <p className="register__step--message">
        We have sent you an email to
        <span className="register__user--email">{` ${newUser.email}. `}</span>
        Make sure to click the link from the message to activate your account.
      </p>
      <Anchor href="#" className="anchor homepage" text="Go to homepage" />
    </div>
  );
};

export default RegisterSuccess;
