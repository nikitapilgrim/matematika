import React, {useEffect, useState, useRef} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import styled, {css, keyframes} from 'styled-components';
import useStoreon from 'storeon/react';

import BgStage from '../assets/svg/stage.svg';
import {SoundButton} from './SoundButton';
import Stages from './stages';


const show = keyframes`
  0% {
      transform: scale(.25);
      opacity: 0;
  }
  100% {
      transform: scale(1);
      opacity: 1;
  }
`;

const Container = styled.form`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  top: auto;
  height: 480px;
  width: 420px;
  font-family: 'Acme', sans-serif;
  opacity: 0;
  animation: ${props => props.show && show} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

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
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  overflow: hidden;
  > span {
    display: block;
    height: 100%;
    > div {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

const ButtonNext = styled.button`
  padding: 20px;
`

const StageInfo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`

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

const ButtonTest = styled.input`
  padding: 20px;
`;

export const StageContainer = ({sounds, show}) => {
  const {dispatch, stage} = useStoreon('stage');


  return (
    <Container show={show} onSubmit={e => e.preventDefault()} onKeyUp={e => {
      const target = e.target;
      const form = target.closest('form');
      const inputs = [...form.querySelectorAll('input')];
      const check = inputs.every((input) => {
        return input.classList.contains('valid');
      });
      if (check) dispatch('next');
    }}>
      <SoundWrapper>
        <SoundButton data={sounds.intro}/>
        <ButtonTest onChange={(e) => {
          dispatch('next', Number(e.target.value));
        }}/>
        <ButtonNext onClick={e => {
          dispatch('next');
        }}>
          next
        </ButtonNext>
        <StageInfo>{stage}</StageInfo>
      </SoundWrapper>
      <SvgContainer>
        <BgStage/>
      </SvgContainer>
      <Inner>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {Stages.map((Stage, index) => {
            if (index === stage) {
              return (
                <Stage key={index}/>
              );
            }
          })}
        </CSSTransitionGroup>
      </Inner>
    </Container>
  );
};