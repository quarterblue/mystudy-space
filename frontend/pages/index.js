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

const Title = styled.span`
  font-size: 72px;
`;

const MainBody = styled.div`
  background-color: #D4D2A5;
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

			<MainBody modalOpen={settingsOpen}>
				<Modal
					mask={false}
					footer={<PrimaryButton content={'CONFIRM'} width={'200px'}></PrimaryButton>}
					maskClosable={false}
					visible={true}
					closable={false}
					centered={true}
					title={'HOW WOULD YOU LIKE TO STUDY TODAY?'}
					width={750}
				>
					<SettingsContainer>
						<h2 style={{marginTop: '12px', width: '35%', textAlign: 'right'}}>MINUTES PER SET:</h2>
						<Input type={'number'}></Input>
					</SettingsContainer>
					<SettingsContainer>
						<h2 style={{marginTop: '12px', width: '35%', textAlign: 'right'}}>NUMBER OF SETS:</h2>
						<Input type={'number'}></Input>
					</SettingsContainer>
					<SettingsContainer>
						<h2 style={{marginTop: '12px', width: '35%', textAlign: 'right'}}>MINUTES PER BREAK:</h2>
						<Input type={'number'}></Input>
					</SettingsContainer>
				</Modal>

				{/*<LoginComponent img={'/room.png'}></LoginComponent>*/}
				{/*<Timer startingTime={startingTime} currentTime={timeLeft} icon={'/clock.svg'}></Timer>*/}
			</MainBody>

		</div>
	);
}
