import { useState } from "react";
import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import Input from "../Input";
import Button from "../Button";
import Anchor from "../Anchor";
import regex from "../../utils/regex";
import "./RegisterSecondStep.scss";

const RegisterSecondStep = ({ step, setStep, newUser, setNewUser }) => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // przemyśleć;
    if (e.target.value !== "") {
      setFirstNameError("");
    }
    if (e.target.value !== "") {
      setLastNameError("");
    }
  };

  const handleFirstNameBlur = () => {
    if (newUser.firstName.lenght < 2 || !regex.name.test(newUser.firstName)) {
      setFirstNameError("Please enter correct first name");
    }
  };
  const handleLastNameBlur = () => {
    if (newUser.firstName.lenght < 2 || !regex.name.test(newUser.firstName)) {
      setLastNameError("Please enter correct last name");
    }
  };
  const divFirstNameClassName = () => {
    return firstNameError ? "input firstname error" : "input firstname";
  };
  const divLastNameClassName = () => {
    return lastNameError ? "input lastname error" : "input lastname";
  };

  return (
    <div className="register__step--second">
      <RegisterStepTitle title="Great!" subtitle="Now your name" />
      <FormWrapper>
        <div className="inputs">
          <Input
            divClassName={divFirstNameClassName()}
            labelClassName="input__label firstname"
            htmlFor="firstname"
            label="firstname"
            inputClassName="input__input firstname"
            inputType="text"
            id="firstname"
            name="firstname"
            placeholder="e.g. Jessica"
            value={newUser.firstName}
            onChange={handleChange}
            onBlur={handleFirstNameBlur}
          />
          <div className="firstname__error">{firstNameError}</div>

          <Input
            divClassName={divLastNameClassName()}
            labelClassName="input__label lastname"
            htmlFor="lastname"
            label="lastname"
            inputClassName="input__input lastname"
            inputType="text"
            id="lastname"
            name="lastname"
            placeholder="e.g. Walton"
            value={newUser.lastName}
            onChange={handleChange}
            onBlur={handleLastNameBlur}
          />
          <div className="lastname__error">{lastNameError}</div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default RegisterSecondStep;
