import { useState, useEffect } from 'react';
import Button from './PrimaryButton';
import DisplaySize from './DisplaySize';
import Modal from './Modal';
import PrimaryButton from './PrimaryButton';
import Input from './Input';
import Image from 'next/image';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import Timer from './Timer';
import RoomComponent from './Room';
import TimelineComponent from './TimeLine';

import styled, { keyframes } from 'styled-components';

const RainAnimation = keyframes`
  from {
    background: radial-gradient(circle, rgba(0, 0, 176, 0) 0%, rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0.28896769889596463) 100%);
  }
  to {
    background: radial-gradient(circle, rgba(0, 0, 176, 0) 0%, rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0.4794438893721551) 100%);
  }
`;

const RainEffect = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  animation: 1s ${RainAnimation} infinite alternate-reverse;
`;

const TimerContainer = styled.div`
  margin: 5em auto 2em auto;
  @media only screen and (max-width: ${DisplaySize['desktop']}) {
    margin: 2em auto 1em auto;
  }
`;

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  filter: invert(0);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 0;

  @media only screen and (max-width: 1024px) {
    background-color: ${(props) => props.modalOpen ? '#E9E8D2;' : 'inherit'}
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  @media only screen and (max-width: ${DisplaySize['tablet']}) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

const SmileyIcon = styled(Image)`
`;

const SurveyItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  padding: 1em 0;

  :hover {
    backdrop-filter: brightness(90%);
    border-radius: 12px;
  }
`;

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoodTips = styled.div`
  display: flex;
  justify-content: center;
`;

const PlushieImage = styled.div`
  height: 5%;
`;

const Landing = ({}) => {
	const {width, height} = useWindowSize();
	const [ startingTime, setStartingTime ] = useState(25 * 60);
	const [ numberOfSets, setNumberOfSets ] = useState(4);
	const [ startingBreakTime, setStartingBreakTime ] = useState(5 * 60);
	const [ currentMood, setMood ] = useState(null);
	const [ currentTip, setCurrentTip ] = useState(null);

	const [ currentInterval, setCurrentInterval ] = useState(1);
	const [ hasStarted, setHasStarted ] = useState(false);
	const [ breakHasStarted, setBreakHasStarted ] = useState(false);
	const [ timeLeft, setTimeLeft ] = useState(startingTime); //25 minute default
	const [ breakTimeLeft, setBreakTimeLeft ] = useState(startingBreakTime);
	const [ playMusic, setPlayMusic ] = useState(false);
	const [ settingsOpen, setSettingsOpen ] = useState(false);
	const [ surveyOpen, setSurveyOpen ] = useState(false);
	const [ setCompleted, setSetCompleted ] = useState(false);
	const [ timelineOpen, setTimelineOpen ] = useState(false);

	const SadTips = [
		'That\'s too bad. Maybe try petting a dog! 🐕',
		'You can do it! Try getting something to drink like bubble tea! 🧋',
		'Some fresh air might help. Try going for a walk! 🚶',
		'Go punch a tree.',
	];

	const NeutralTips = [
		'You can make it. Take the time during your break to get some tea. 🍵',
		'Take things one step at a time. There is no rush.',
	];

	const HappyTips = [
		'That\'s great news! You can do it! 🎉',
		'That\'s great! Just remember to pace yourself so you don\'t get burnt out!',
	];

	const plushies = [
		'friends',
		'slouching',
		'training',
		'optimistic',
		'rich',
		'modern',
	];

	const handleTimesUp = () => {
		setCurrentInterval(currentInterval + 1);
		if (currentInterval >= numberOfSets) {
			handleSetCompletion();
		} else {
			//open self help
			setSurveyOpen(true);
			setTimeLeft(startingTime);
		}
		console.log('hi');
	};

	const handleSetCompletion = () => {
		setNumberOfSets(4);
		setCurrentInterval(1);
		setTimeLeft(startingTime);
		setSetCompleted(true);
	};

	useEffect(() => {
		if (breakHasStarted) {
			if (breakTimeLeft <= 0) {
				setBreakHasStarted(false);
				return;
			}
			setTimeout(() => {
				setBreakTimeLeft(breakTimeLeft - 1);
			}, 1000);
		}
	}), [ breakTimeLeft, breakHasStarted ];

	useEffect(() => {
		if (hasStarted) {
			if (timeLeft <= 0) {
				handleTimesUp();
				setHasStarted(false);
				return;
			}
			setTimeout(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
		}
	}), [ timeLeft, hasStarted ];

	const handleMusicClick = () => {
		setPlayMusic(!playMusic);
	};

	const handleSettingsOpen = () => {
		if (!hasStarted) {
			setSettingsOpen(true);
		}
	};

	const handleConfirm = () => {
		if (document.querySelector('#minutes-per-set').value && document.querySelector('#number-of-set').value && document.querySelector('#minutes-per-break').value) {
			setStartingTime(document.querySelector('#minutes-per-set').value * 60);
			setTimeLeft(document.querySelector('#minutes-per-set').value * 60);

			setNumberOfSets(document.querySelector('#number-of-set').value);
			setCurrentInterval(1);
			setStartingBreakTime(document.querySelector('#minutes-per-break').value * 60);
			setBreakTimeLeft(document.querySelector('#minutes-per-break').value * 60);

			setSettingsOpen(false);
		}
	};

	const handlePlay = () => {
		setHasStarted(true);
	};

	const handleBreakDone = () => {
		if (breakTimeLeft <= 0) {
			setSurveyOpen(false);
			setHasStarted(true);
		}
	};

	const handleHappy = () => {
		setMood('happy');
		setCurrentTip(HappyTips[Math.floor(Math.random() * HappyTips.length)]);
		setBreakHasStarted(true);
	};

	const handleNeutral = () => {
		setMood('neutral');
		setCurrentTip(NeutralTips[Math.floor(Math.random() * NeutralTips.length)]);
		setBreakHasStarted(true);
	};

	const handleBad = () => {
		setMood('sad');
		setCurrentTip(SadTips[Math.floor(Math.random() * SadTips.length)]);
		setBreakHasStarted(true);
	};

	const handleSetCompleted = () => {
		setSetCompleted(false);
	};

	const handleTimeLineClick = () => {
		setTimelineOpen(!timelineOpen);
	};

	const handleTimelineClose = (value) => {
		setTimelineOpen(value);
	};

	return (
		<>
			{setCompleted ? <Confetti width={width} height={height}></Confetti> : <></>}
			<LandingContainer modalOpen={settingsOpen} raining={playMusic}>
				<TimerContainer>
					<Timer
						currStep={currentInterval}
						steps={numberOfSets}
						startingTime={startingTime}
						currentTime={timeLeft}
						icon={'/icons/clock.svg'}
						onClick={handleSettingsOpen}
					></Timer>
				</TimerContainer>
				<RoomComponent bears={[ 0, 1, 2, 3, 4, 5 ]}/>
				<TimelineComponent visible={timelineOpen} close={handleTimelineClose}/>
				<ButtonContainer>
					<StyledButton
						primary={false}
						content={`music: ${playMusic ? 'on' : 'off'}`}
						icon={`${playMusic ? 'rain-' : ''}cloud`}
						onClick={handleMusicClick}
					/>
					<StyledButton primary={false} content={'timeline'} icon={'calendar'} onClick={handleTimeLineClick}/>
					<StyledButton
						content={'start'}
						icon={'arrow'}
						style={{fontWeight: 700, letterSpacing: '0.05em'}}
						onClick={handlePlay}
					/>
				</ButtonContainer>
				<Modal
					mask={false}
					footer={<PrimaryButton onClick={handleConfirm} content={'CONFIRM'} width={'200px'}></PrimaryButton>}
					visible={settingsOpen}
					onCancel={() => setSettingsOpen(false)}
					closable={false}
					centered={true}
					title={'HOW WOULD YOU LIKE TO STUDY TODAY?'}
					width={750}
				>
					<SettingsContainer>
						<h2 style={{marginTop: '12px', width: '35%', textAlign: 'right'}}>MINUTES PER SET:</h2>
						<Input id={'minutes-per-set'} type={'number'} min={'5'} required></Input>
					</SettingsContainer>
					<SettingsContainer>
						<h2 style={{marginTop: '12px', width: '35%', textAlign: 'right'}}>NUMBER OF SETS:</h2>
						<Input id={'number-of-set'} type={'number'} min={'2'} required></Input>
					</SettingsContainer>
					<SettingsContainer>
						<h2 style={{marginTop: '12px', width: '35%', textAlign: 'right'}}>MINUTES PER BREAK:</h2>
						<Input id={'minutes-per-break'} type={'number'} min={'5'} required></Input>
					</SettingsContainer>
				</Modal>
				<Modal
					mask={false}
					footer={currentMood ? <PrimaryButton disabled={breakTimeLeft > 0} content={breakTimeLeft > 0 ?
						(Math.floor(breakTimeLeft / 60) + ':' + ('0' + (breakTimeLeft - Math.floor(breakTimeLeft / 60) * 60)).slice(-2)) : 'OK'
					} onClick={handleBreakDone}></PrimaryButton> : <></>}
					visible={surveyOpen}
					onCancel={() => setSettingsOpen(false)}
					closable={false}
					centered={true}
					title={
						currentTip ? currentTip : 'GREAT JOB! HOW DO YOU FEEL?'
					}
					width={750}
				>
					{currentMood ?
						<MoodTips>
							<PlushieImage>
								<img style={{height: '10em'}} layout={'fill'} objectFit={'contain'}
									 src={'/bears/' + plushies[numberOfSets % plushies.length] + '.png'}></img>
							</PlushieImage>
						</MoodTips>
						:
						<SurveyContainer>
							<SurveyItem onClick={handleHappy}>
								<SmileyIcon src={'/happy.svg'} width={72} height={72}></SmileyIcon>
								<h2 style={{marginTop: '16px', width: '45%'}}>GREAT, LET'S KEEP GOING!</h2>
							</SurveyItem>
							<SurveyItem onClick={handleNeutral}>
								<SmileyIcon src={'/neutral.svg'} width={72} height={72}></SmileyIcon>
								<h2 style={{marginTop: '16px', width: '45%'}}>NOT BAD, I CAN'T COMPLAIN.</h2>
							</SurveyItem>
							<SurveyItem onClick={handleBad}>
								<SmileyIcon src={'/angry.svg'} width={72} height={72}></SmileyIcon>
								<h2 style={{marginTop: '16px', width: '45%'}}>AWFUL, PLEASE HELP ME.</h2>
							</SurveyItem>
						</SurveyContainer>
					}
				</Modal>
				<Modal
					mask={false}
					footer={<PrimaryButton onClick={handleSetCompleted} content={'CONFIRM'}
										   width={'200px'}></PrimaryButton>}
					visible={setCompleted}
					onCancel={() => setSettingsOpen(false)}
					closable={false}
					centered={true}
					title={'CONGRATULATIONS! 🎉 YOU DID IT! GO TAKE A WELL DESERVED BREAK!'}
					width={750}
				>
					<MoodTips>
						<PlushieImage>
							<img style={{height: '10em'}} layout={'fill'} objectFit={'contain'}
								 src={'/bears/' + plushies[Math.floor(Math.random() * plushies.length)] + '.png'}></img>
						</PlushieImage>
					</MoodTips>
				</Modal>
			</LandingContainer>
		</>
	);
};


export default Landing;
