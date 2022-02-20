import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginComponent from './components/LoginComponent';
import Timer from './components/Timer';
import Modal from './components/Modal';
import PrimaryButton from './components/PrimaryButton';
import Input from './components/Input';
import Landing from './components/Landing';

const Title = styled.span`
  font-size: 72px;
`;

const MainBody = styled.div`
  background-color: #d4d2a5;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  filter: invert(0);
  overflow: hidden;
  position: fixed;

  @media (max-width: 1024px) {
    background-color: ${(props) => props.modalOpen ? '#E9E8D2;' : 'inherit'}
  }
`;

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

export default function Home() {
	const startingTime = 20;
	const [ hasStarted, setHasStarted ] = useState(false);
	const [ timeLeft, setTimeLeft ] = useState(startingTime);	//25 minute default
	const [ settingsOpen, setSettingsOpen ] = useState(true);

	const handleTimesUp = () => {
		console.log('hi');
	};

	useEffect(() => {
			if (timeLeft === 0) {
				handleTimesUp();
				return;
			}
			setTimeout(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
		},
	), [ timeLeft, hasStarted ];

	return (
		<div className={styles.container}>
			<Head>
				<title>My Study Space</title>
				<meta name="description" content="A cozy space for quiet studies and collecting plushies."/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Landing />

				{/*<LoginComponent img={'/room.png'}></LoginComponent>*/}
		</div>
	);
}
