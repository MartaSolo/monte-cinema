import { useState } from "react";
import Header from "../../components/Header";
import RegisterFirstStep from "../../components/RegisterFirstStep";
import RegisterSecondStep from "../../components/RegisterSecondStep";
import RegisterSuccess from "../../components/RegisterSuccess";
import "./Register.scss";

const Register = () => {
  const [step, setStep] = useState(1);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });
  return (
    <>
      <Header />
      <div className="register">
        <div className="container">
          <form className="register__form">
            <div className="register__step">
              {step === 1 && (
                <RegisterFirstStep
                  step={step}
                  setStep={setStep}
                  newUser={newUser}
                  setNewUser={setNewUser}
                />
              )}
              {step === 2 && <RegisterSecondStep step={step} />}
              {step === 3 && <RegisterSuccess />}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
