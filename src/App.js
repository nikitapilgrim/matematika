import React, {useState} from 'react';
import {Link, Route} from 'wouter';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
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
`;


const SoundStatus = {
  PAUSED: Sound.status.PAUSED,
  PLAYING: Sound.status.PLAYING,
};

const App = () => {
  const [introSound, setIntroSound] = useState(true);
  const [introStatus, setIntroStatus] = useState(null);

  introSound ? setIntroStatus(SoundStatus.PLAYING) : setIntroStatus(SoundStatus.PAUSED);

  return (
    <Container>
      <Sound
        url={IntroSound}
        playStatus={introStatus}
      />
      <IntroLogo/>
      <StageContainer sounds={{intro: {state: introSound, action: setIntroSound}}}/>
      <Background/>
    </Container>
  );
};

//#if _DEBUG
HotManager.register(module.id);
//#endif

export default App;
