import { useState } from "react";
import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import Input from "../Input";
import "./RegisterFirstStep.scss";

const RegisterFirstStep = ({ step, setStep, newUser, setNewUser }) => {
  const [emailError, setEmailError] = useState("email address is not correct");
  // console.log("newUser.email", newUser.email);
  // console.log("newUser.password", newUser.password);
  const [passwordError, setPasswordError] = useState({
    charNum: null,
    oneLetter: null,
    oneDigit: null,
  });

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
            divClassName="input email"
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
          />
          <Input
            divClassName="input password"
            labelClassName="input__label password"
            htmlFor="password"
            label="password"
            inputClassName="input__input password"
            inputType="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={newUser.password}
            onChange={handleChange}
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
