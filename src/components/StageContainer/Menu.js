import React from 'react';
import styled from 'styled-components';
import {SoundButton} from '../SoundButton';
import useStoreon from 'storeon/react';


const MenuWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  
`;

const Subtitle = styled.h1`
  
`;

const StartButton = styled.button`
  padding: 5px;
  background-color: #5C8E00;
  border: 1px solid white;
  border-radius: 3px;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
`;


const SoundWrapper = styled.button`
  position: relative;
  z-index: 3;
`;


export const Menu = ({children, start}) => {
  const {dispatch, audio} = useStoreon('stage', 'audio');

  return (
    <MenuWrapper>
      <SoundWrapper>
        <SoundButton onClick={() => {
          audio.intro ? dispatch('intro/off') : dispatch('intro/on');
        }} state={audio.intro}/>
      </SoundWrapper>
      <StartButton onClick={start}>START</StartButton>
    </MenuWrapper>
  );
};