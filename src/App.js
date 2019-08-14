import React, {useState, useEffect, useRef} from 'react';
import {Link, Route} from 'wouter';
import easyScroll from 'easy-scroll';
import Confetti from 'react-confetti';
import useAudio from 'react-use/lib/useAudio';

import StoreContext from 'storeon/react/context';
import useStoreon from 'storeon/react';
import useWindowSize from 'react-use/lib/useWindowSize';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {store} from './store/store';

import styled from 'styled-components';

import {Background} from './components/Layout/Background';
import {IntroLogo} from './components/IntroLogo';
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
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
`;


// SOUNDS
const SoundManager = {
  intro: {
    mp3: require('./assets/sounds/01.mp3'),
    acc: require('./assets/sounds/01.aac'),
    m4r: require('./assets/sounds/01.m4r'),
    ogg: require('./assets/sounds/01.oggvorbis.ogg'),
  }
};

export const App = () => {
  const {dispatch, progress, stage, final, audio} = useStoreon('progress', 'stage', 'final', 'audio');
  const [pageLoad, setPageLoad] = useState(false);
  const [introSound, setIntroSound] = useState(false);
  const [introStatus, setIntroStatus] = useState(null);
  const [showStage, setShowStage] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const {width, height} = useWindowSize();
  const scrollRef = useRef(null);
  const [music, state, controls, ref] = useAudio(<audio controls loop ref={ref}>
    <source src={SoundManager.intro.mp3} type="audio/mpeg"/>
    <source src={SoundManager.intro.ogg} type="audio/ogg"/>
    <source src={SoundManager.intro.acc} type="audio/acc"/>
  </audio>);

  useEffect(() => {
    if (audio.intro) {
      controls.play()
    }
    if (audio.intro === false) {
      controls.pause()
    }
  }, [audio]);

  const handlerScrollEnd = (event) => {
    setTimeout(() => {
      setShowStage(true);
    }, 1000);
  };

  const handlerPageLoad = () => {
    const container = document.querySelector('#progress-container');
    dispatch('setProgress', 100); // final
    container.style.transform = 'translate(-9999px,-9999px)'; // hide preload
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
    dispatch('setProgress', 5); // initial
    handlerPageLoad()
/*
    setTimeout(handlerPageLoad, 3000); // time to load resources
*/
  }, []);


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
      {music}
      {final && <ConfettiWrapper>
        <Confetti
          width={width}
          height={height}
        />
      </ConfettiWrapper>}
      <IntroLogo hide={/*showStage*/false} show={{/*showIntro*/}}/>
      <StageContainer show={/*showStage*/true} sounds={{intro: {state: introSound, action: setIntroSound}}}/>
      <Background blur={/*showStage*/ true}/>
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

