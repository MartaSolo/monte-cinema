import { useState } from "react";
import moment from "moment";
import RegisterStepTitle from "../RegisterStepTitle";
import FormWrapper from "../FormWrapper";
import Input from "../Input";
import Button from "../Button";
import Anchor from "../Anchor";
import regex from "../../utils/regex";
import "./RegisterSecondStep.scss";

const RegisterSecondStep = ({ setStep, newUser, setNewUser }) => {
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState({
    underage: null,
    format: "",
  });
  // console.log("newUser.privPolicy", newUser.privPolicy);

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "privPolicy") {
      setNewUser((prev) => ({ ...prev, privPolicy: e.target.checked }));
    }
    if (e.target.name === "name" && e.target.value !== "") {
      setNameError("");
    }
    if (e.target.name === "surname" && e.target.value !== "") {
      setSurnameError("");
    }
    if (e.target.name === "dateOfBirth" && e.target.value !== "") {
      setDateOfBirthError((prev) => ({ ...prev, format: "" }));
    }
  };

  const handleNameBlur = () => {
    if (!regex.name.test(newUser.name)) {
      setNameError("Please enter correct first name");
    }
  };

  const handleSurnameBlur = () => {
    if (!regex.name.test(newUser.surname)) {
      setSurnameError("Please enter correct last name");
    }
  };

  const handleDateOfBirthBlur = () => {
    setDateOfBirthError((prev) => ({ ...prev, underage: true }));
    if (
      newUser.dateOfBirth.length === 0 ||
      !regex.dateOfBirth.test(newUser.dateOfBirth)
    ) {
      setDateOfBirthError((prev) => ({
        ...prev,
        format: "Please enter date in correct format",
      }));
    }
    const birthDay = moment(newUser.dateOfBirth, "DD/MM/YYYY");
    const dateNow = moment();
    const age = dateNow.diff(birthDay, "years");
    console.log("age", age);
    if (age >= 18) {
      setDateOfBirthError((prev) => ({ ...prev, underage: false }));
    }
  };

  const divNameClassName = () => {
    return nameError ? "input name error" : "input name";
  };

  const divSurnameClassName = () => {
    return surnameError ? "input surname error" : "input surname";
  };

  const dateOfBirthErrorClassName = (value) => {
    if (value === false) {
      return "dateofbirth__error correct";
    } else if (value === true) {
      return "dateofbirth__error error";
    } else {
      return "dateofbirth__error";
    }
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const disableButton = () => {
    if (
      !newUser.name ||
      !newUser.surname ||
      !newUser.dateOfBirth ||
      !newUser.privPolicy ||
      nameError ||
      surnameError ||
      dateOfBirthError.underage ||
      dateOfBirthError.format
    ) {
      return "disabled";
    } else {
      return "";
    }
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

          <Input
            divClassName="input dateofbirth"
            labelClassName="input__label dateofbirth"
            htmlFor="dateofbirth"
            label="Date of birth"
            inputClassName="input__input dateofbirth"
            inputType="text"
            id="dateofbirth"
            name="dateOfBirth"
            placeholder="DD/MM/YYYY"
            pattern={regex.dateOfBirth}
            value={newUser.dateOfBirth}
            onChange={handleChange}
            onBlur={handleDateOfBirthBlur}
          />
          <div className="dateofbirth__errors">
            <p className={dateOfBirthErrorClassName(dateOfBirthError.underage)}>
              You should be minimum 18 years old
            </p>
            <p
              className={
                dateOfBirthError.format
                  ? "dateofbirth__error error"
                  : "dateofbirth__error"
              }
            >
              {dateOfBirthError.format}
            </p>
          </div>
          <Input
            divClassName="input privpolicy"
            labelClassName={
              newUser.privPolicy
                ? "input__label privpolicy checked"
                : "input__label privpolicy"
            }
            htmlFor="privpolicy"
            label={
              <span>
                I accept{" "}
                <a href="#" className="privpolicy--link">
                  Privacy Policy
                </a>
              </span>
            }
            inputClassName="input__input privpolicy"
            inputType="checkbox"
            id="privpolicy"
            name="privPolicy"
            value={newUser.privPolicy}
            onChange={handleChange}
          />
        </div>

        <div className="buttons">
          <Button
            className="button next"
            type="button"
            text="Next step"
            onClick={handleNextStep}
            disabled={disableButton()}
          />
          <Anchor href="#" className="anchor toLogin" text="Log in instead" />
        </div>
      </FormWrapper>
    </div>
  );
};

export default RegisterSecondStep;
