import React from 'react';
import styled from 'styled-components';
import IconOff from '../assets/svg/icon-speaker-off.svg';
import IconOn from '../assets/svg/icon-speaker-on.svg';

const SoundContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 5px;
  background-color: white;
  border: 3px solid red;
  border-radius: 50% 50%;
  cursor: pointer;
`;

export const SoundButton = ({state, onClick}) => {

  return (
    <SoundContainer onClick={onClick}>
      {state ? <IconOn/> : <IconOff/>}
    </SoundContainer>
  );
};