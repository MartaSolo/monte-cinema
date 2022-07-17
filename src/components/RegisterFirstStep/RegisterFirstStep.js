import { useState } from "react";
import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import Input from "../Input";
import "./RegisterFirstStep.scss";

const RegisterFirstStep = ({ step, setStep, newUser, setNewUser }) => {
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log("newUser.email", newUser.email);

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
            value={newUser.email}
            onChange={handleChange}
          />
        </div>
      </FormWrapper>
    </div>
  );
};

export default RegisterFirstStep;
