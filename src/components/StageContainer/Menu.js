import React from 'react';
import styled, {css} from 'styled-components';
import {SoundButton} from '../SoundButton';
import useStoreon from 'storeon/react';
import ArrowIcon from '../../assets/svg/arrow.svg';

const MenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  padding: 5px;
  background-color: #007F13;
  border: 1px solid transparent;
  border-radius: 7px;
  font-size: 36px;
  height: 50px;
  color: #fff;
  cursor: pointer;
`;


const SoundWrapper = styled.button`
  position: relative;
  z-index: 3;
  background: #007F13;
  border: 1px solid transparent;
  border-radius: 7px;
  padding: 5px;
  height: 50px;
  width: 50px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:last-child {
    margin-left: 5px;
  }
  p {
    text-align: center;
    color: #007F13;
  }
`;

const ArrowWrapper = styled.div`
  height: 30px;
  width: 15px;
  margin-bottom: 15px;
`;

export const Menu = ({children, start}) => {
  const {dispatch, audio} = useStoreon('stage', 'audio');

  return (
    <MenuWrapper>
      <MenuItem>
        <p>Ukljuci <br/> zvuk</p>
        <ArrowWrapper>
          <ArrowIcon/>
        </ArrowWrapper>
        <SoundWrapper>
          <SoundButton onClick={() => {
            audio.intro ? dispatch('intro/off') : dispatch('intro/on');
          }} state={audio.intro}/>
        </SoundWrapper>
      </MenuItem>
      <MenuItem>
        <p>Pokreni <br/> igricu!</p>
        <ArrowWrapper>
          <ArrowIcon/>
        </ArrowWrapper>
        <StartButton onClick={start}>START</StartButton>
      </MenuItem>
    </MenuWrapper>
  );
};