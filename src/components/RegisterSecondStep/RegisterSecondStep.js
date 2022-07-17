import { useState } from "react";
import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import Input from "../Input";
import Button from "../Button";
import Anchor from "../Anchor";
import regex from "../../utils/regex";
import "./RegisterSecondStep.scss";

const RegisterSecondStep = ({ step, setStep, newUser, setNewUser }) => {
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.name, e.target.value);
    // przemyśleć;
    if (e.target.value !== "") {
      setNameError("");
    }
    if (e.target.value !== "") {
      setSurnameError("");
    }
  };

  const handleNameBlur = () => {
    if (newUser.name.lenght < 2 || !regex.name.test(newUser.name)) {
      setNameError("Please enter correct first name");
    }
  };

  const handleSurnameBlur = () => {
    if (newUser.surname.lenght < 2 || !regex.name.test(newUser.surname)) {
      setSurnameError("Please enter correct last name");
    }
  };

  const divNameClassName = () => {
    return nameError ? "input name error" : "input name";
  };

  const divSurnameClassName = () => {
    return surnameError ? "input surname error" : "input surname";
  };

  return (
    <div className="register__step--second">
      <RegisterStepTitle title="Great!" subtitle="Now your name" />
      <FormWrapper>
        <div className="inputs">
          <Input
            divClassName={divNameClassName()}
            labelClassName="input__label name"
            htmlFor="name"
            label="First name"
            inputClassName="input__input name"
            inputType="text"
            id="name"
            name="name"
            placeholder="e.g. Jessica"
            value={newUser.name}
            onChange={handleChange}
            onBlur={handleNameBlur}
          />
          <div className="name__error">{nameError}</div>

          <Input
            divClassName={divSurnameClassName()}
            labelClassName="input__label surname"
            htmlFor="surname"
            label="Last name"
            inputClassName="input__input surname"
            inputType="text"
            id="surname"
            name="surname"
            placeholder="e.g. Walton"
            value={newUser.surname}
            onChange={handleChange}
            onBlur={handleSurnameBlur}
          />
          <div className="surname__error">{surnameError}</div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default RegisterSecondStep;
