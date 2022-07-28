import { useState } from "react";
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

  const handleNameChange = (e) => {
    if (!regex.name.test(newUser.name)) {
      setNameError("Please enter correct first name");
    } else {
      setNameError("");
    }
    setNewUser((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleSurnameChange = (e) => {
    if (!regex.name.test(newUser.surname)) {
      setSurnameError("Please enter correct last name");
    } else {
      setSurnameError("");
    }
    setNewUser((prev) => ({ ...prev, surname: e.target.value }));
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirthError((prev) => ({ ...prev, underage: true }));

    const today = new Date();
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getUTCDate()
    );
    const birthday = new Date(e.target.value);

    if (
      e.target.value.length === 0 ||
      !regex.dateOfBirth.test(e.target.value) ||
      birthday > today
    ) {
      setDateOfBirthError((prev) => ({
        ...prev,
        format: "Please enter correct date",
      }));
    } else {
      setDateOfBirthError((prev) => ({ ...prev, format: "" }));
    }

    if (birthday < eighteenYearsAgo) {
      setDateOfBirthError((prev) => ({ ...prev, underage: false }));
    }
    setNewUser((prev) => ({ ...prev, dateOfBirth: e.target.value }));
  };

  const handlePrivPolicyChange = (e) => {
    setNewUser((prev) => ({ ...prev, privPolicy: e.target.checked }));
  };

  const divDateOfBirthClassName = (object) => {
    return Object.values(object).some((el) => el === true)
      ? "input dateofbirth error"
      : "input dateofbirth";
  };

  const dateOfBirthErrorClassName = (value) => {
    if (!value) {
      return "dateofbirth__error correct";
    } else if (value) {
      return "dateofbirth__error error";
    } else {
      return "dateofbirth__error";
    }
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
            divClassName={nameError ? "input name error" : "input name"}
            labelClassName="input__label name"
            htmlFor="name"
            label="First name"
            inputClassName="input__input name"
            inputType="text"
            id="name"
            name="name"
            placeholder="e.g. Jessica"
            value={newUser.name}
            onChange={handleNameChange}
          />
          <div className="name__error">{nameError}</div>

          <Input
            divClassName={
              surnameError ? "input surname error" : "input surname"
            }
            labelClassName="input__label surname"
            htmlFor="surname"
            label="Last name"
            inputClassName="input__input surname"
            inputType="text"
            id="surname"
            name="surname"
            placeholder="e.g. Walton"
            value={newUser.surname}
            onChange={handleSurnameChange}
          />
          <div className="surname__error">{surnameError}</div>

          <Input
            divClassName={divDateOfBirthClassName(dateOfBirthError)}
            labelClassName="input__label dateofbirth"
            htmlFor="dateofbirth"
            label="Date of birth"
            inputClassName="input__input dateofbirth"
            inputType="text"
            id="dateofbirth"
            name="dateOfBirth"
            placeholder="DD/MM/YYYY"
            value={newUser.dateOfBirth}
            onChange={handleDateOfBirthChange}
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
            onChange={handlePrivPolicyChange}
          />
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

export default RegisterSecondStep;
