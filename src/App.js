import React, {useState, useEffect, useRef} from 'react';
import {Link, Route} from 'wouter';
import Confetti from 'react-confetti';
import DOMConfetti from './components/effects/index';
import useAudio from 'react-use/lib/useAudio';

import StoreContext from 'storeon/react/context';
import useStoreon from 'storeon/react';
import useWindowSize from 'react-use/lib/useWindowSize';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {store} from './store/store';

import styled from 'styled-components';

import {Blured} from './components/Layout/Background';
/*
import {IntroLogo} from './components/IntroLogo';
*/
import {Preload} from './components/Preload';
import {StageContainer} from './components/StageContainer';
import {Intro} from './components/stages/Intro';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar { 
    display: none; 
  }
`;

const ConfettiWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const MusicContainer = styled.div`
  position: absolute;
  left: -99999px;
`;


// SOUNDS
const SoundManager = {
  intro: {
    mp3: require('./assets/sounds/01.mp3'),
    acc: require('./assets/sounds/01.aac'),
    m4r: require('./assets/sounds/01.m4r'),
    ogg: require('./assets/sounds/01.oggvorbis.ogg'),
  },
};

export const App = () => {
  const {dispatch, progress, stage, final, audio} = useStoreon('progress', 'stage', 'final', 'audio');
  const [nextStage, setNextStage] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [textIntro, setTextIntro] = useState(false);
  const {width, height} = useWindowSize();
  const scrollRef = useRef(null);
  const [showIntro, setShowIntro] = useState(false);
  const [showStageContainer, setShowStageContainer] = useState(false);
  const [music, state, controls, ref] = useAudio(
    <audio controls loop ref={ref}>
      <source src={SoundManager.intro.mp3} type="audio/mpeg"/>
      <source src={SoundManager.intro.ogg} type="audio/ogg"/>
      <source src={SoundManager.intro.acc} type="audio/acc"/>
    </audio>);

  const config = {
    angle: '90',
    spread: '100',
    startVelocity: '62',
    elementCount: 100,
    dragFriction: '0.21',
    duration: '2630',
    stagger: '0',
    width: '10px',
    height: '10px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const handlerPageLoad = () => {
    let interval;
    let count = 5;
    dispatch('setProgress', 100);
    /*
        const animation = () => {
          if (count === 100) clearInterval(interval);
          dispatch('setProgress', count++);
        };
        interval = setInterval(animation, 10);
        // final
         dispatch('setProgress', 100); // final
         setTimeout(() => {
           container.style.transform = 'translate(-9999px,-9999px)'; // hide preload
           setShowIntro(true);
           setTimeout(() => {
             setPageLoad(true);
           }, 2000);
         }, 1000);*/
  };

  useEffect(() => {
    if (audio.intro) {
      controls.play();
    }
    if (audio.intro === false) {
      controls.pause();
    }
  }, [audio]);

  useEffect(() => {
    setTimeout(handlerPageLoad, 500);
    /*
        setTimeout(handlerPageLoad, 3000); // time to load resources
    */
  }, []);

  useEffect(() => {
    const introShowArr = [0, 4, 8, 15, 24, 29, 34, 41, 47, 54, 59, 65, 69];
    const texts = {
      0: 'Test 1',
      4: 'Test 2',
      8: 'Test 3',
      15: 'Test 4',
      24: 'Test 5',
      29: 'Test 6',
      34: 'Test 7',
      41: 'Test 8',
      47: 'Test 9',
      54: 'Test 10',
      59: 'Test 11',
      65: 'Test 12',
      69: 'Test 13',
    };
    if (introShowArr.includes(stage)) {
      setTextIntro(texts[stage]);
      setShowIntro(true);
      setShowStageContainer(false);
      setTimeout(() => {
        setShowIntro(false);
        setTimeout(() => {
          setShowStageContainer(true);
        }, 500)
      }, 3000);
    }
  }, [stage]);

  return (
    <Container>
      {
        final && <ConfettiWrapper>
          <Confetti
            width={width}
            height={height}
          />
        </ConfettiWrapper>
      }
      {progress === 100 ?
        <>
          <Intro text={textIntro} show={showIntro}/>
          <StageContainer onStart={() => setGameStart(true)} next={setNextStage} show={showStageContainer}/>
        </>
        : <Preload/>
      }

      <ConfettiWrapper>
        <DOMConfetti active={nextStage} config={config}/>
      </ConfettiWrapper>
      <MusicContainer>
        {music}
      </MusicContainer>
      <Blured blur={true}/>
    </Container>
  );
};

const WithProviders = () => {
  return (
    <StoreContext.Provider value={store}>
      <Route path="/" component={App}/>
    </StoreContext.Provider>
  );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

