import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import LoginComponent from "./components/LoginComponent";
import RoomComponent from "./components/Room";

const MainBody = styled.div`
  background: #d4d2a5;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 72px;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Study Space</title>
        <meta name="description" content="My study space." />
        <link rel="icon" href="/panda-icon.svg" />
        {/* <link rel="icon" href="/favicon.ico"/> */}
      </Head>

      <MainBody>
        {/*<LoginComponent img={'/room.png'}></LoginComponent>*/}
        <RoomComponent />

        <></>
      </MainBody>
    </div>
  );
}
