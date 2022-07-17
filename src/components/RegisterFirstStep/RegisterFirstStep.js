import { useState } from "react";
import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import Input from "../Input";
import regex from "../../utils/regex";
import "./RegisterFirstStep.scss";

const RegisterFirstStep = ({ step, setStep, newUser, setNewUser }) => {
  // console.log("newUser.email", newUser.email);
  // console.log("newUser.password", newUser.password);
  // console.log("newUser.password.length", newUser.password.length);

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState({
    charNum: null,
    oneLetter: null,
    oneDigit: null,
  });
  // console.log("passwordError", passwordError);

  const [passwordType, setPasswordType] = useState("password");

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailBlur = () => {
    if (newUser.email.length === 0 || !regex.email.test(newUser.email)) {
      setEmailError("Please enter correct email address");
    }
  };

  const handlePassrowdBlur = () => {
    setPasswordError({ charNum: true, oneLetter: true, oneDigit: true });
    if (newUser.password.length === 8) {
      setPasswordError((prev) => ({ ...prev, charNum: false }));
    }
    if (regex.passOneLetter.test(newUser.password)) {
      setPasswordError((prev) => ({ ...prev, oneLetter: false }));
    }
    if (regex.passOneDigit.test(newUser.password)) {
      setPasswordError((prev) => ({ ...prev, oneDigit: false }));
    }
  };

  const divEmailClassName = () => {
    return emailError ? "input email error" : "input email";
  };

  const passErrorClassName = (value) => {
    switch (value) {
      case null:
        return "password__error";
      case true:
        return "password__error error";
      case false:
        return "password__error correct";
      default:
        return "password__error";
    }
  };

  return (
    <div className="register__step--first">
      <RegisterStepTitle title="Ahoy you!" subtitle="Care to register?" />
      <FormWrapper>
        <div className="inputs">
          <Input
            divClassName={divEmailClassName()}
            labelClassName="input__label email"
            htmlFor="email"
            label="email"
            inputClassName="input__input email"
            inputType="email"
            id="email"
            name="email"
            placeholder="email@monterail.com"
            value={newUser.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
          />
          <div className="email__error">{emailError}</div>
          <Input
            divClassName="input password"
            labelClassName="input__label password"
            htmlFor="password"
            label="password"
            inputClassName="input__input password"
            inputType={passwordType}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={newUser.password}
            onChange={handleChange}
            onBlur={handlePassrowdBlur}
          />
          <div className="password__errors">
            <p className={passErrorClassName(passwordError.charNum)}>
              At least 8 characters
            </p>
            <p className={passErrorClassName(passwordError.oneLetter)}>
              At least one letter
            </p>
            <p className={passErrorClassName(passwordError.oneDigit)}>
              At least one digit
            </p>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default RegisterFirstStep;
