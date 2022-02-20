import styled from "styled-components";
import Image from "next/image";
import DisplaySize from "./DisplaySize";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "#3A445D" : "#D4D2A5")};
  border-radius: 12px;
  min-width: ${(props) => props.width};
  height: 52px;
  border-style: none;
  color: ${(props) => (props.primary ? "#E9E8D2" : "#3A445D")};
  border: ${(props) => (props.primary ? "none" : "3px #3A445D solid")};
  font-size: 2.4rem;
  margin-top: 12px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 1em 0.5em;
  width: 21rem;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    filter: brightness(80%);
  }
  @media only screen and (max-width: ${DisplaySize["mobile"]}) {
    font-size: 2rem;
  }
`;

const PrimaryButton = ({
  primary = true,
  icon,
  content = "",
  width = "100px",
  ...props
}) => {
  return (
    <div>
      {console.log("icon", `/icons/${icon}.svg`)}
      <StyledButton primary={primary} width={width} {...props}>
        {icon ? (
          <Image
            height={primary ? 24 : 32}
            width={primary ? 24 : 32}
            src={`/icons/${icon}.svg`}
          ></Image>
        ) : (
          <></>
        )}
        {content}
      </StyledButton>
    </div>
  );
};

export default PrimaryButton;
