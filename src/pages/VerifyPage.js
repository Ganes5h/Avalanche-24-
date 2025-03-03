import React from "react";
import styled from "styled-components";
// import "./login.css";
import StarBackground from "./StarBackground";
import VerifyRegister from "../components/VerifyRegister";

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121211;
  position: relative;
  overflow: hidden;
`;

const Form = () => {
  return (
    <StyledForm>
      {/* <StarBackground /> */}
      <VerifyRegister />
    </StyledForm>
  );
};

export default Form;
