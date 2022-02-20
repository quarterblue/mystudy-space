import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import LoginInput from './LoginInput';
import { useState } from 'react';

const LoginContainer = styled.div`
  background: #D4D2A5;
  height: 100vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 72px;
  padding-bottom: 32px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }
`;

const Footer = styled.div`
  text-align: center;
  font-size: 12px;
	
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
`;

const StyledImage = styled.img`
  width: 30vw;
  aspect-ratio: 1 / 1 !important;
  height: auto;

  @media (max-width: 1024px) {
    width: 60%;
	align-self: center;
  }
`;

const RightLoginComponent = styled.div`
  width: 50%;
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
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

const RightSignUpComponent = styled.div`
  width: 50%;
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const LoginComponent = ({ img, handleLogin, handleSignup }) => {
	const [ isSignUp, setIsSignUp ] = useState(false);

	const handleSignUp = () => {
		setIsSignUp(true);
	}

	return (
		<LoginContainer>
			<Title>My Study Space</Title>
			<LoginBody>
				<StyledImage src={img} alt={'room'}></StyledImage>
					{isSignUp ?
						<RightLoginComponent>
							<LoginInput title={'EMAIL'} required></LoginInput>
							<LoginInput title={'NAME'} required></LoginInput>
							<LoginInput title={'PASSWORD'} type={'password'} required></LoginInput>
							<PrimaryButton width={'100%'} type={'primary'} content={'SIGN UP'}></PrimaryButton>
						</RightLoginComponent> :
					<RightSignUpComponent>
						<LoginInput title={'EMAIL'} required></LoginInput>
						<LoginInput title={'PASSWORD'} required type={'password'}></LoginInput>
						<PrimaryButton width={'100%'} type={'primary'} content={<b>LOGIN</b>}></PrimaryButton>
						<SignUp onClick={handleSignUp}>SIGN UP</SignUp>
					</RightSignUpComponent>
				}
			</LoginBody>
			<Footer>Created for StormHacks 2022</Footer>
		</LoginContainer>
	);
};

export default LoginComponent;