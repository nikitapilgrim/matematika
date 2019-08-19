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
  const [pageLoad, setPageLoad] = useState(false);
  const [introSound, setIntroSound] = useState(false);
  const [introStatus, setIntroStatus] = useState(null);
  const [showStage, setShowStage] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [nextStage, setNextStage] = useState(false);
  const {width, height} = useWindowSize();
  const scrollRef = useRef(null);
  const [music, state, controls, ref] = useAudio(
    <audio controls loop ref={ref}>
      <source src={SoundManager.intro.mp3} type="audio/mpeg"/>
      <source src={SoundManager.intro.ogg} type="audio/ogg"/>
      <source src={SoundManager.intro.acc} type="audio/acc"/>
    </audio>);

  const config = {
    angle: 90,
    spread: 90,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 0,
    width: '20px',
    height: '20px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const handlerPageLoad = () => {
    dispatch('setProgress', 100);
    let interval;
    let count = 5;

    /*const animation = () => {
      if (count === 100) clearInterval(interval);
      dispatch('setProgress', count++);
    };
    interval = setInterval(animation, 10);*/
    // final
    /* dispatch('setProgress', 100); // final
     setTimeout(() => {
       container.style.transform = 'translate(-9999px,-9999px)'; // hide preload
       setShowIntro(true);
       setTimeout(() => {
         setPageLoad(true);
       }, 2000);
     }, 1000);
 */
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
    dispatch('setProgress', 5); // initial
    setTimeout(handlerPageLoad, 500);
    /*
        setTimeout(handlerPageLoad, 3000); // time to load resources
    */
  }, []);

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
        <StageContainer next={setNextStage} show={/*showStage*/true}/>
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

