import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ClockInput = styled.div`
  width: 338px;
  min-height: 188px;
  height: fit-content;
  border: 2px solid ${(props) => props.hasStarted ? '#EFD5C3' : '#3A445D'};
  border-radius: 12px;
  color: #3A445D;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 12px;
  transition: border ${(props) => props.startingTime + 's'};
  
  hover {
	transform: translateY(-1px);
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
`;

const TimeLeft = styled.span`
  font-size: 72px;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin: -12px;

  @media (max-width: 1024px) {
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
			   }) => {
	return (
		<ClockInput>
			<StepCounter>SET {currStep} OF {steps}</StepCounter>
			<TimeLeft>
				{icon ? <StyledIcon src={icon}></StyledIcon> : <></>}
				{Math.floor(currentTime / 60)}:{('0' + (currentTime - Math.floor(currentTime / 60) * 60)).slice(-2)}</TimeLeft>
			{countingDown ? <StyledSpan>remaining</StyledSpan> : <></>}
		</ClockInput>
	);
};

export default Timer;