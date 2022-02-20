import { Input as AntInput } from "antd";
import styled from "styled-components";
import DisplaySize from "./DisplaySize";

const InputContainer = styled.div`
  height: max-content;
  margin: 12px 0;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  font-family: barlow;
  color: rgba(58, 68, 93, 1);
`;

const StyledInput = styled(AntInput)`
  margin-top: 8px;
  height: 52px;
  background-color: rgba(233, 232, 210, 0.4);
  border: #3a445d solid 3px;
  border-radius: 12px;
  width: ${(props) => props.width || "100%"};
  min-width: 20em;
  border-right-width: 3px !important;

  :hover {
    border: #3a445d solid 3px;
    box-shadow: none;
    border-right-width: 3px !important;
  }

  :focus {
    border: #3a445d solid 3px;
    box-shadow: none;
    border-right-width: 3px !important;
  }

  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    max-width: 100%;
  }
`;

// const handleChange = (e) => {
//   console.log("value", e.target.value);
// };

const Input = ({ title = "", inputValue, ...props }) => {
  const handleInput = (e) => {
    // console.log("blur e", e, e.target.value);
    return inputValue(e.target.value);
  };
  // console.log("input value", props.value, props);
  return (
    <InputContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledInput
        // onChange={handleChange}
        // onPressEnter={console.log("entered")}
        onBlur={handleInput}
        {...props}
      ></StyledInput>
    </InputContainer>
  );
};

export default Input;
