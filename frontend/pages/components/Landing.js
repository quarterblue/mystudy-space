import { useState, useEffect } from "react";
import Timer from "./Timer";
import RoomComponent from "./Room";
import TimelineComponent from "./TimeLine";
import Button from "./PrimaryButton";
import DisplaySize from "./DisplaySize";

import styled from "styled-components";

const TimerContainer = styled.div`
  margin: 5em auto 2em auto;
  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    margin: 3.5em auto 1em auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

const Landing = ({}) => {
  const startingTime = 20;
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(startingTime); //25 minute default
  const [playMusic, setPlayMusic] = useState(false);
  const [open, setOpen] = useState(false);

  const handleTimesUp = () => {
    console.log("hi");
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimesUp();
      return;
    }
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }),
    [timeLeft, hasStarted];

  const handleMusicClick = () => {
    setPlayMusic(!playMusic);
  };

  const handleTimeLineClick = () => {
    setOpen(!open);
  };

  const handleClose = (value) => {
    setOpen(value);
  };

  return (
    <>
      <TimerContainer>
        <Timer
          startingTime={startingTime}
          currentTime={timeLeft}
          icon={"/icons/clock.svg"}
        ></Timer>
      </TimerContainer>
      <RoomComponent bears={[0, 1, 2, 3, 4, 5]} />
      <TimelineComponent visible={open} close={handleClose} />
      <ButtonContainer>
        <StyledButton
          primary={false}
          content={`music: ${playMusic ? "on" : "off"}`}
          icon={`${playMusic ? "rain-" : ""}cloud`}
          onClick={handleMusicClick}
        />
        <StyledButton
          primary={false}
          content={"timeline"}
          icon={"calendar"}
          onClick={handleTimeLineClick}
        />
        <StyledButton
          content={"start"}
          icon={"arrow"}
          style={{ fontWeight: 700, letterSpacing: "0.05em" }}
        />
      </ButtonContainer>
    </>
  );
};

export default Landing;
