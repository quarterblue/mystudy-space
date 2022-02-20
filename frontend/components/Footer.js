import styled from "styled-components";

const StyledFooter = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: #6a6832;

  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
`;

const Footer = () => {
  return <StyledFooter>Created for StormHacks 2022 🌩️</StyledFooter>;
};

export default Footer;
