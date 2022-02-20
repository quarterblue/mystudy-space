import styled from 'styled-components';
import { useState, useEffect } from 'react';
import DisplaySize from './DisplaySize';

const ClockInput = styled.button`
  width: 338px;
  /* min-height: 188px; */
  height: fit-content;
    /* border: 2px solid ${(props) =>
          props.hasStarted ? '#EFD5C3' : '#3A445D'}; */
  border-radius: 12px;
  color: #3a445d;
  display: flex;
  flex-direction: column;
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
  padding: 12px;
  transition: all 0.1s;
  background-color: transparent;
  border: 2px solid transparent;

  :hover {
    /* transform: translateY(-1px); */
    border: 2px solid ${(props) => (props.disabled ? 'transparent' : '#3A445D')};
  }
`;

const StepCounter = styled.span`
  font-size: 24px;
  align-self: center;
`;

const StyledIcon = styled.img`
  left: 10%;
  align-self: center;
  margin-top: 8px;
  margin-right: 12px;

  @media only screen and (max-width: ${DisplaySize['desktop']}) {
    margin-top: 0.1em;
    width: 0.8em;
    height: 0.8em;
  }
`;

const TimeLeft = styled.span`
  font-size: 72px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-self: center;
  margin: -12px;

  @media only screen and (max-width: ${DisplaySize['desktop']}) {
    font-size: 48px;
  }
`;

const StyledSpan = styled.span`
  font-size: 36px;
  align-self: center;
`;

const Timer = ({
				   icon,
				   onClick,
				   currentTime,
				   startingTime,
				   handleTimeUp,
				   countingDown = true,
				   setCount = 0,
				   currStep = 1,
				   steps = 3,
				   disabled = false,
			   }) => {
	return (
		<ClockInput onClick={onClick} disabled={disabled}>
			<StepCounter>
				SET {currStep} OF {steps}
			</StepCounter>
			<TimeLeft>
				{icon ? <StyledIcon src={icon}></StyledIcon> : <></>}
				{Math.floor(currentTime / 60)}:
				{('0' + (currentTime - Math.floor(currentTime / 60) * 60)).slice(-2)}
			</TimeLeft>
			{countingDown ? <StyledSpan>remaining</StyledSpan> : <></>}
		</ClockInput>
	);
};

export default Timer;
