import { useState, useContext } from "react";
import {Context} from '../context/state';
import styles from "../styles/Home.module.css";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import InputTemplate from "../components/InputTemplate";

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
  const {authData} = useContext(Context);
  const [auth, setAuth] = authData;
  return (
    <div className={styles.container}>
      <MainBody>
        {auth.length > 0 ? <Landing />: <InputTemplate type={'login'} />}
        
        <Footer />
      </MainBody>
    </div>
  );
}
