import { Input } from 'antd';
import styled from 'styled-components';

const InputContainer = styled.div`
  height: max-content;
  margin: 12px 0;
`;

const StyledTitle = styled.span`
  font-size: 20px;
`;

const StyledInput = styled(Input)`
  margin-top: 8px;
  height: 52px;
  background-color: #E9E8D2;
  border: #3A445D solid 3px;
  border-radius: 12px;
  width: ${(props) => props.width || '100%'};

  :hover {
    border: #3A445D solid 3px;
    box-shadow: none;
  }

  :focus {
    border: #3A445D solid 3px;
    box-shadow: none;
  }
`;

const LoginInput = ({title = '', ...props}) => {
	return (
		<InputContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledInput {...props}></StyledInput>
		</InputContainer>
	);
};

export default LoginInput;