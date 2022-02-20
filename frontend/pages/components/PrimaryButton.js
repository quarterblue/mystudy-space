import styled from 'styled-components';
import Image from 'next/image'

const StyledButton = styled.button`
	background-color: ${(props) => props.primary ? '#3A445D' : '#D4D2A5'};
  	border-radius: 12px;
  	min-width: ${(props) => props.width};
  	height: 52px;
  	border-style: none;
  	color: ${(props) => props.primary ? '#E9E8D2' : '#3A445D'};
  	border: ${(props) => props.primary ? 'none' : '3px #3A445D solid'};
  	font-size: 24px;
  	margin-top: 12px;
  	cursor: pointer;
  	transition: all 0.1s ease-in;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	gap: 8px;
  
  	:hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	  transform: translateY(-1px);
	}
`

const PrimaryButton = ({ primary = true, icon, content = '', width = '100px', ...props }) => {
	return (
		<div>
			<StyledButton primary={primary} width={width} {...props}>
				{icon ? <Image height={32} width={32} src={icon}></Image> : <></>}
				{content}
			</StyledButton>
		</div>
	);
};

export default PrimaryButton;