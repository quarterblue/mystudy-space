import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import Input from "./Input";
import RoomComponent from "./Room";
import { useState } from "react";
import DisplaySize from "./DisplaySize";
import FooterComponent from "./Footer";
import axios from "axios";

const LoginContainer = styled.div`
  background: #d4d2a5;
  height: 100vh;
  flex-direction: column;
  /* width: 70%; */

  display: flex;
  /* justify-content: center; */
`;

const LoginBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2em;
  margin-top: 2em;

  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-family: barlow;
  text-align: center;
  font-size: 72px;
  padding-bottom: 32px;
  padding-top: 1em;

  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    font-size: 36px;
  }
`;

// const Footer = styled.p`
//   text-align: center;
//   font-size: 1.6rem;
//   color: #6a6832;

//   position: absolute;
//   bottom: 1rem;
//   left: 0;
//   right: 0;
// `;

const StyledImage = styled.img`
  width: 30vw;
  aspect-ratio: 1 / 1 !important;
  height: auto;

  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    width: 60%;
    align-self: center;
  }
`;

const InputComponents = styled.div`
  /* width: 50%; */
  width: 29em;
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    width: 100%;
    max-width: 38em;
    margin: auto;
  }
`;

const SignUp = styled.span`
  align-self: center;
  text-align: center;
  cursor: pointer;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  transition: text-decoration-color 300ms;
  margin-top: 12px;

  hover {
    text-decoration-color: rgba(0, 0, 0, 1);
  }
`;

const StyledButton = styled(PrimaryButton)`
  button {
    font-weight: 700;
    background: red;
  }
`;

const InputTemplate = ({ type = "register" }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [full_name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    setIsSignUp(true);
    let resp = await fetch("http://localhost:9000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name,
        email,
        password,
      }),
    });
  };

  const handleLogIn = async () => {
    console.log('handle log')
    const params = new URLSearchParams();
    params.append('username', email)
    params.append('password', password)
    let resp = await axios.post("http://localhost:9000/api/v1/auth/access-token", params);
    console.log(resp);
  };

  const handleInput = (value, type) => {
    console.log("val", value);
    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "name":
        setName(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  return (
    <LoginContainer>
      {console.log("the state", email)}
      <Title>My Study Space</Title>
      <LoginBody>
        {/* <StyledImage src={img} alt={"room"}></StyledImage> */}
        <RoomComponent build={[1]} login={true} />
        {type === "register" ? (
          <InputComponents>
            <Input
              title={"EMAIL"}
              type={"email"}
              inputValue={(e) => handleInput(e, "email")}
              required
            ></Input>
            <Input
              title={"NAME"}
              inputValue={(e) => handleInput(e, "name")}
              required
            ></Input>
            <Input
              title={"PASSWORD"}
              inputValue={(e) => handleInput(e, "password")}
              type={"password"}
              required
            ></Input>
            <StyledButton
              width={"100%"}
              type={"primary"}
              content={"SIGN UP"}
              onClick={handleSignUp}
            ></StyledButton>
          </InputComponents>
        ) : (
          <InputComponents>
            <Input
              title={"EMAIL"}
              inputValue={(e) => handleInput(e, "email")}
              required
            ></Input>

            <Input
              title={"PASSWORD"}
              inputValue={(e) => handleInput(e, "password")}
              required
              type={"password"}
            ></Input>
            <StyledButton
              width={"100%"}
              type={"primary"}
              content={<b>LOGIN</b>}
              onClick={handleLogIn}
            ></StyledButton>
            <SignUp onClick={handleSignUp}>SIGN UP</SignUp>
          </InputComponents>
        )}
      </LoginBody>
      <FooterComponent />
    </LoginContainer>
  );
};

export default InputTemplate;
