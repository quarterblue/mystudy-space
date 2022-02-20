import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import LoginComponent from "./components/LoginComponent";
import Modal from "./components/Modal";
import Landing from "./components/Landing";

import styled from "styled-components";
// import Timer from "./components/Timer";
// import RoomComponent from "./components/Room";
// import Button from "./components/PrimaryButton";

const Title = styled.span`
  font-size: 72px;
`;

const MainBody = styled.div`
    background-color: #d4d2a5;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`;

export default function Home() {
    // const startingTime = 20;
    // const [hasStarted, setHasStarted] = useState(false);
    // const [timeLeft, setTimeLeft] = useState(startingTime); //25 minute default

    // const handleTimesUp = () => {
    //   console.log("hi");
    // };

    // useEffect(() => {
    //   if (timeLeft === 0) {
    //     handleTimesUp();
    //     return;
    //   }
    //   setTimeout(() => {
    //     setTimeLeft(timeLeft - 1);
    //   }, 1000);
    // }),
    //   [timeLeft, hasStarted];

    return (
        <div className={styles.container}>
            <Head>
                <title>My Study Space</title>
                <meta name="description" content="My study space." />
                <link rel="icon" href="/panda-icon.svg" />
            </Head>
            {/*<Modal visible={true} closable={false}></Modal>*/}

            <MainBody>
                <Landing />
                {/*<LoginComponent img={'/room.png'}></LoginComponent>*/}
                {/* <TimerContainer>
          <Timer
            startingTime={startingTime}
            currentTime={timeLeft}
            icon={"/icons/clock.svg"}
          ></Timer>
        </TimerContainer>
        <RoomComponent bears={[0, 1, 2, 3, 4, 5]} />
        <ButtonContainer>
          <StyledButton primary={false} content={"music: off"} icon={"cloud"} />
          <StyledButton
            primary={false}
            content={"timeline"}
            icon={"calendar"}
          />
          <StyledButton
            content={"start"}
            icon={"arrow"}
            style={{ fontWeight: 700, letterSpacing: "0.05em" }}
          />
        </ButtonContainer> */}

                <></>
            </MainBody>
        </div>
    );
}