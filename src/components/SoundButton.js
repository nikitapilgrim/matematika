import React, {useState} from 'react';
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

export const SoundButton = ({data}) => {
  const [sound, setSound] = useState(data.state);

  return (
    <SoundContainer onClick={() => {
      setSound(!sound);
      data.action(sound)
    }}>
      {sound ? <IconOn/> : <IconOff/>}
    </SoundContainer>
  );
};