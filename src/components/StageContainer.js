import React from 'react';
import styled from 'styled-components';
import useStoreon from 'storeon/react';

import BgStage from '../assets/svg/stage.svg';
import {SoundButton} from './SoundButton';
import Stages from './stages';

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 5vh;
  height: 480px;
  width: 420px;
  font-family: 'Acme', sans-serif;;
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
  padding: 20px;
  padding-right: 10px;
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
  pointer-events: none;
  @media (max-width: 600px) {
    top: 0;
  }
`;

const SoundWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 3;
   @media (max-width: 600px) {
    left: 0;
    top: -120px;
  }
  
`;

const ButtonTest = styled.button`
  padding: 20px;
`;

export const StageContainer = ({sounds}) => {
  const {dispatch, stage} = useStoreon('stage');

  return (
    <Container onSubmit={e => e.preventDefault()} onKeyup={e => {
      const target = e.target;
      const form = target.closest('form');
      const inputs = form.querySelectorAll('input');
      //console.log(inputs)
    }}>
      <SoundWrapper>
        <SoundButton data={sounds.intro}/>
        <ButtonTest onClick={() => {
          dispatch('next');
        }}>TEST</ButtonTest>
      </SoundWrapper>
      <SvgContainer>
        <BgStage/>
      </SvgContainer>
      <Inner>
        {Stages[stage]()}
      </Inner>
    </Container>
  );
};