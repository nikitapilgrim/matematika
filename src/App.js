import React, {useState, useEffect} from 'react';
import {Link, Route} from 'wouter';
import SmoothScroll from 'smooth-scroll';
import StoreContext from 'storeon/react/context';
import useStoreon from 'storeon/react';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {store} from './store/store';

import Sound from 'react-sound';
import styled from 'styled-components';

import FinalPage from './pages/final';
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
  overflow: hidden;
`;


const SoundStatus = {
  PAUSED: Sound.status.PAUSED,
  PLAYING: Sound.status.PLAYING,
};

export const App = () => {
  const Scroll = new SmoothScroll();
  const {dispatch, progress} = useStoreon('progress');
  const [pageLoad, setPageLoad] = useState(false);
  const [introSound, setIntroSound] = useState(false);
  const [introStatus, setIntroStatus] = useState(null);
  const [showStage, setShowStage] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const handlerPageLoad = () => {
    const container = document.querySelector('#progress-container');
    dispatch('setProgress', 100); // final
    window.scrollTo(0, 0);
    setTimeout(() => {
      container.style.transform = 'translate(-9999px,-9999px)';
      setShowIntro(true);
      setTimeout(() => {
        setPageLoad(true);
      }, 2000);
    }, 1000);


    /* setTimeout(function() {
       dispatch('setProgress', 100); // final
       window.scrollTo(0, 0);
       setTimeout(function() {
         container.style.opacity = '0';
         window.scrollTo(0, 0);
         container.style.transform = 'translate(-9999px,-9999px)';
         setTimeout(() => {
           setPageLoad(true);
         }, 500);
       }, 500);
     }, 2000);*/
  };

  const logScrollEvent = (event) => {
    setTimeout(() => {
      setShowStage(true);
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch('setProgress', 5); // initial
    setTimeout(handlerPageLoad, 3000);
    /*return () => {
      window.removeEventListener('load', handlerPageLoad);
    };*/
  }, []);


  useEffect(() => {
    introSound ? setIntroStatus(SoundStatus.PLAYING) : setIntroStatus(SoundStatus.PAUSED);
  }, [introSound]);

  useEffect(() => {
    if (pageLoad) {
      document.addEventListener('scrollCancel', logScrollEvent, false);
      const body = document.querySelector('body');

      setTimeout(() => {
        Scroll.animateScroll(body.scrollHeight);
      }, 1000);
      return () => {
        document.removeEventListener('scrollCancel', logScrollEvent);
      };
    }
  }, [pageLoad]);

  /*const handlerOnLoad = (e) => {
    introSound ? setIntroStatus(SoundStatus.PLAYING) : setIntroStatus(SoundStatus.PAUSED);
  };*/

  return (
    <Container>
      <Sound
        url={IntroSound}
        playStatus={introStatus}
      />
      <IntroLogo show={showIntro}/>
      <StageContainer show={showStage} sounds={{intro: {state: introSound, action: setIntroSound}}}/>
      <Background blur={showStage}/>
    </Container>
  );
};

const WithProviders = () => {
  return (
    <StoreContext.Provider value={store}>
      <Route path="/" component={App}/>
      <Route path="/final" component={FinalPage}/>
    </StoreContext.Provider>
  );
};

export default WithProviders;

//#if _DEBUG
HotManager.register(module.id);
//#endif

