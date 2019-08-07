import React from 'react';
import styled from 'styled-components';
import BgStage from '../assets/svg/stage.svg';
import {SoundButton} from './SoundButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 200px;
  height: 480px;
  width: 420px;
  @media (max-width: 600px) {
    height: 320px;
    width: 270px;
  }
`;

const Inner = styled.div`
  position: relative;
  left: 2%;
  top: -3%;
  z-index: 1;
  width: 85%;
  height: 85%;
  padding: 30px;
  background-color: white;

  //box-shadow: 3px 3px 20px 6px #FFF;
`;

const SvgContainer = styled.div`
  position: absolute; 
  top: -30px;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  transform: scale(2.5);
  @media (max-width: 600px) {
    top: 0;
  }
`;

const SoundWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 3;
  
`;

export const StageContainer = ({sounds}) => {

  return (
    <Container>
      <SoundWrapper>
        <SoundButton data={sounds.intro}/>
      </SoundWrapper>
      <SvgContainer>
        <BgStage/>
      </SvgContainer>
      <Inner>
        hi
      </Inner>
    </Container>
  );
};