import styles from "../styles/Home.module.css";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

import styled from "styled-components";

const MainBody = styled.div`
  background-color: #d4d2a5;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <MainBody>
        <Landing />
        <Footer />
      </MainBody>
    </div>
  );
}
