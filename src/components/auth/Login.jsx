import React, { useState } from "react";
import { GroupLogo, bgrectangle } from "../../assests/images";
import styled from "styled-components";
import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
export const LoginCopyWrite = styled.p`
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  transform: translate(-50%, -50%);
  left: 50%;
`;

export const LoginDiv = styled.div`
  height: 540px;
  width: 470px;
  border-radius: 13px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const SaveDetail = styled.div`
  display: flex;
  font-size: 15px;
`;

export const LoginHeading = styled.h3`
  margin-top: 12px;
  font-size: 40px;
`;

export const SubmitButton = styled.button`
  background-color: #0057ff;
  border-radius: 6px;
  padding: 8px 40px 8px 40px;
  border: 1px solid #0057ff;
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin: 20px 0px 0px 0px;
`;

export const InputLabel = styled.label`
  font-size: 15px;
  margin-top: 15px;
`;

export const Input = styled.input`
  background-color: #c4c4c4;
  height: 48px;
  border-radius: 5px;
`;

export const MainHeading = styled.div`
  background-color: #121419;
  height: 100px;
`;

export const MainInnerHeading = styled.p`
  left: 156px;
  top: 52px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 30px;
  line-height: 46px;
  color: #1887c9;
  margin-top: 20px;
`;

const Div = styled.div`
  background-image: url(${bgrectangle});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 100%;
  .showPassword {
    position: absolute;
    display: flex;
    margin-left: 341px;
    font-size: 20px;
    margin-top: -31px;
  }
  /* overflow: hidden; */
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
    error: {
      name: "",
      value: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState({
    value: "",
  });

  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const state = useSelector((state) => state.authred.value);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        if (!/.+@.+\.[A-Za-z]+$/.test(value)) {
          setCredential({
            ...credential,
            error: {
              name: name,
              value: "Invalid Email Address",
            },
          });
        } else {
          setCredential({
            ...credential,
            error: {
              name: "",
              value: "",
            },
          });
        }
        break;
      default:
        break;
    }
  };

  const handleShow = () => {
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credential.email === "" || credential.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty email/password field",
      }));
      alert(errorMessage);
    } else if (
      credential.email.toLowerCase() === "admin" &&
      credential.password === "123456"
    ) {
      localStorage.setItem("role", "admin");
      dispatch(login());
      navigate("/dashbord");
    } else if (credential?.email === "user" && credential.password === "1234") {
      dispatch(login());
      navigate("/test");
    } else {
      setErrorMessage({ value: "Invalid email/password" });
      alert(JSON.stringify(errorMessage.value));
      return;
    }
  };

  return (
    <>
      <Div>
        <div className="overlay">
          <div className="container-fluid ">
            <MainHeading className="row">
              <MainInnerHeading>
                <img src={GroupLogo} />
                WEBKORPS
              </MainInnerHeading>
            </MainHeading>
            <div className="container d-flex justify-content-center mt-5">
              <LoginDiv className="card container mt-4 px-5">
                <LoginHeading className="card-title text-center mt-4">
                  Login
                </LoginHeading>
                <form>
                  <div className="form-group mt-2 ">
                    <InputLabel>Email Address</InputLabel>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control mt-2"
                      required={true}
                      onChange={handleOnChange}
                      value={credential?.email}
                      
                      onBlur={handleValidation}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <InputLabel>Password</InputLabel>
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="form-control mt-2"
                      required={true}
                      onChange={handleOnChange}
                      value={credential?.password}
                      name="password"
                    />
                    {showPassword ? (
                      <VscEye
                        className="showPassword"
                        onClick={() => handleShow()}
                      />
                    ) : (
                      <VscEyeClosed
                        className="showPassword"
                        onClick={() => handleShow()}
                      />
                    )}
                  </div>
                  <SaveDetail>
                    <input type="checkbox" className="CheckBox" />
                    <p className="mt-4 mb-3">Remember me</p>
                  </SaveDetail>
                  <div className="d-flex justify-content-center">
                    <SubmitButton type="submit" onClick={handleSubmit}>
                      Log in
                    </SubmitButton>
                  </div>
                </form>
                <p className="text-center text-secondary mt-4 bottomLine">
                  Don't have account?{" "}
                  <span className="text-primary fw-bold">
                    <a href="" className="text-decoration-none">
                      Register
                    </a>
                  </span>
                </p>
                <p className="text-center text-secondary bottomLineTwo">
                  Forgot Password?
                </p>
              </LoginDiv>
            </div>
          </div>
          <LoginCopyWrite>Copyright@webkorps2021</LoginCopyWrite>
        </div>
      </Div>
    </>
  );
};

export default Login;
