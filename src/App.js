import React, {useState, useEffect, useRef} from 'react';
import {Link, Route} from 'wouter';
import easyScroll from 'easy-scroll';
import Confetti from 'react-confetti';

import StoreContext from 'storeon/react/context';
import useStoreon from 'storeon/react';
import useWindowSize from 'react-use/lib/useWindowSize';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {store} from './store/store';

import Sound from 'react-sound';
import styled from 'styled-components';

import {Background} from './components/Layout/Background';
import {IntroLogo} from './components/IntroLogo';
import {StageContainer} from './components/StageContainer';

// SOUNDS
import IntroSound from './assets/sounds/01.mp3';

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
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
`;


const SoundStatus = {
  PAUSED: Sound.status.PAUSED,
  PLAYING: Sound.status.PLAYING,
};

export const App = () => {
  const {dispatch, progress, stage, final} = useStoreon('progress', 'stage', 'final');
  const [pageLoad, setPageLoad] = useState(false);
  const [introSound, setIntroSound] = useState(false);
  const [introStatus, setIntroStatus] = useState(null);
  const [showStage, setShowStage] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const {width, height} = useWindowSize();
  const scrollRef = useRef(null);

  const handlerScrollEnd = (event) => {
    setTimeout(() => {
      setShowStage(true);
    }, 1000);
  };

  const handlerPageLoad = () => {
    const container = document.querySelector('#progress-container');
    dispatch('setProgress', 100); // final
    setTimeout(() => {
      container.style.transform = 'translate(-9999px,-9999px)'; // hide preload
      setShowIntro(true);
      setTimeout(() => {
        setPageLoad(true);
      }, 2000);
    }, 1000);

  };

  useEffect(() => {
    dispatch('setProgress', 5); // initial
    setTimeout(handlerPageLoad, 3000); // time to load resources
  }, []);


  useEffect(() => {
    introSound ? setIntroStatus(SoundStatus.PLAYING) : setIntroStatus(SoundStatus.PAUSED);
  }, [introSound]);

  useEffect(() => {
    if (pageLoad) {
      setTimeout(() => {
        easyScroll({
          'scrollableDomEle': scrollRef.current,
          'direction': 'bottom',
          'duration': 1000,
          'easingPreset': 'easeInQuad',
          'scrollAmount': scrollRef.current.scrollHeight,
          'onAnimationCompleteCallback': handlerScrollEnd,
        });
      }, 1000);

    }
  }, [pageLoad]);

  return (
    <Container ref={scrollRef}>
      <Sound
        url={IntroSound}
        playStatus={introStatus}
      />
      {final && <ConfettiWrapper>
        <Confetti
          width={width}
          height={height}
        />
      </ConfettiWrapper>}
      <IntroLogo hide={showStage} show={showIntro}/>
      <StageContainer show={showStage} sounds={{intro: {state: introSound, action: setIntroSound}}}/>
      <Background blur={showStage}/>
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

