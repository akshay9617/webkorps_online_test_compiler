import React from "react";
import GroupLogo from "./images/Grouplogo.svg";
import styled from "styled-components";
import bg from "./images/bgrectangle.png";
import "./Register.css";


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
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 100%;
  /* overflow: hidden; */
`;

const Login = () => {
  return (
    <>
      <Div>
        <div className="overlay">
          <div className="container-fluid ">
            <MainHeading className="row">
              <MainInnerHeading>
                <img src={GroupLogo}/>
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
                      className="form-control mt-2"
                      required={true}
                    />
                  </div>
                  <div className="form-group mt-4">
                    <InputLabel>Password</InputLabel>
                    <Input
                      type="tel"
                      className="form-control mt-2"
                      required={true}
                    />
                  </div>
                  <SaveDetail>
                    <input type="checkbox" className="CheckBox" />
                    <p className="mt-4 mb-3">Remember me</p>
                  </SaveDetail>
                  <div className="d-flex justify-content-center">
                    <SubmitButton type="submit">Log in</SubmitButton>
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
