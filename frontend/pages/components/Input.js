import { Input as AntInput } from 'antd';
import styled from 'styled-components';

const InputContainer = styled.div`
  height: max-content;
  margin: 12px 0;
`;

const StyledTitle = styled.span`
  font-size: 20px;
`;

const StyledInput = styled(AntInput)`
  margin-top: 8px;
  height: 52px;
  background-color: #F7F7EF;
  border: #3A445D solid 3px;
  border-radius: 12px;
  width: ${(props) => props.width || '100%'};
  border-right-width: 3px !important;
  
  :hover {
    border: #3A445D solid 3px;
    box-shadow: none;
    border-right-width: 3px !important;
  }

  :focus {
    border: #3A445D solid 3px;
    box-shadow: none;
    border-right-width: 3px !important;
  }
`;

const Input = ({title = '', ...props}) => {
	return (
		<InputContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledInput {...props}></StyledInput>
		</InputContainer>
	);
};

export default Input;