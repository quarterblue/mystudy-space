import styled from 'styled-components';

const ButtonContainer = styled.div`
`;

const StyledButton = styled.button`
	background-color: ${(props) => props.hasStarted ? '#EFD5C3' : '#3A445D'};
  	border-radius: 12px;
  	min-width: ${(props) => props.width};
  	height: 52px;
  	border-style: none;
  	color: ${(props) => props.hasStarted ? '#3A445D' : '#D4D2A5'};
  	font-size: 24px;
  	margin-top: 12px;
  	cursor: pointer;
  	transition: all 0.1s ease-in;
  
  	:hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	  transform: translateY(-1px);
	}
`

const PrimaryButton = ({ content = '', width = '100px', ...props }) => {
	return (
		<ButtonContainer>
			<StyledButton width={width} {...props}>{content}</StyledButton>
		</ButtonContainer>
	);
};

export default PrimaryButton;