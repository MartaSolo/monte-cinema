import { useState } from "react";
import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import Input from "../Input";
import Button from "../Button";
import Anchor from "../Anchor";
import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import regex from "../../utils/regex";
import "./RegisterFirstStep.scss";

const RegisterFirstStep = ({ setStep, newUser, setNewUser }) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState({
    charNum: null,
    oneLetter: null,
    oneDigit: null,
  });
  const [passwordType, setPasswordType] = useState("password");

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if ((e.target.name = "email")) {
      if (e.target.value.length === 0 || !regex.email.test(e.target.value)) {
        setEmailError("Please enter correct email address");
      }
    }
    if (e.target.name === "password") {
      setPasswordError({ charNum: true, oneLetter: true, oneDigit: true });
      if (e.target.value.length >= 8) {
        setPasswordError((prev) => ({ ...prev, charNum: false }));
      }
      if (regex.passOneLetter.test(e.target.value)) {
        setPasswordError((prev) => ({ ...prev, oneLetter: false }));
      }
      if (regex.passOneDigit.test(e.target.value)) {
        setPasswordError((prev) => ({ ...prev, oneDigit: false }));
      }
    }
  };

  const togglePasswordType = () => {
    return passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const divPasswordClassName = (object) => {
    if (Object.values(object).some((el) => el === true)) {
      return "input password error";
    } else {
      return "input password";
    }
  };

  const passErrorClassName = (value) => {
    if (value === false) {
      return "password__error correct";
    } else if (value === true) {
      return "password__error error";
    } else {
      return "password__error";
    }
  };

  const disableButton = () => {
    if (
      !newUser.email ||
      !newUser.password ||
      emailError ||
      passwordError.charNum ||
      passwordError.oneLetter ||
      passwordError.oneDigit
    ) {
      return "disabled";
    } else {
      return "";
    }
  };

  return (
    <div className="register__step--first">
      <RegisterStepTitle title="Ahoy you!" subtitle="Care to register?" />
      <FormWrapper>
        <div className="inputs">
          <Input
            divClassName={emailError ? "input email error" : "input email"}
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
          <div className="email__error">{emailError}</div>

          <Input
            divClassName={divPasswordClassName(passwordError)}
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
            children={
              <button
                type="button"
                className="password__button"
                onClick={togglePasswordType}
              >
                <EyeIcon />
              </button>
            }
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
        <div className="buttons">
          <Button
            className="button next"
            type="button"
            text="Next step"
            onClick={() => setStep((prev) => prev + 1)}
            disabled={disableButton()}
          />
          <Anchor href="#" className="anchor toLogin" text="Log in instead" />
        </div>
      </FormWrapper>
    </div>
  );
};

export default RegisterFirstStep;
