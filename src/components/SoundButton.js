import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/svg/notes-icon.svg'
import {Button} from './Button';

const SoundContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const SoundButton = ({state, onClick}) => {

  return (
    <Button>
      <SoundContainer onClick={onClick}>
        <Icon/>
      </SoundContainer>
    </Button>
  );
};