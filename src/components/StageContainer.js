import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import styled, {css, keyframes} from 'styled-components';
import UIfx from 'uifx';
import useStoreon from 'storeon/react';
import nextStageSound from '../assets/sounds/next-stage_01.mp3';

import {Menu} from './StageContainer/Menu';
import BgStage from '../assets/svg/stage.svg';
import Stages from './stages';

import keyUpSound from '../assets/sounds/button_01.mp3';

const SoundKeyUp = new UIfx(keyUpSound);
const SoundStage = new UIfx(nextStageSound);

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

const hide = keyframes`
  0% {
      transform: scale(1);
      opacity: 1;
  }
  100% {
      transform: scale(.25);
      opacity: 0;
  }
`;

const Container = styled.form`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35%;
  height: 480px;
  width: 420px;
  font-family: 'Acme', sans-serif;
  transform: scale(.25);
  opacity: 0;
  animation: ${props => props.show && show || hide} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

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
  overflow: hidden;
  background-color: ${props => props.menu ? '#C2DC9F' : '#FFF'};
`;

const StagesWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ButtonNext = styled.button`
  padding: 20px;
`;

const StageInfo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
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

const ButtonTest = styled.input`
  padding: 20px;
`;

const DebugContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

const InnerInside = styled.div`
  height: 100%;
  width: 100%;
  > span {
    display: block;
    height: 100%;
    > div {
      height: 100%;
    }
  }
`;

export const StageContainer = ({show, next, onStart}) => {
  const {dispatch, stage, audio} = useStoreon('stage', 'audio');
  const [showMenu, setShowMenu] = useState(true);
  const [showStage, setShowStage] = useState(show);

  const stagesRef = useRef(null);

  useEffect(() => {
    if (stagesRef.current) {
      next(false);
      SoundStage.play();
      setTimeout(() => {
        const div = stagesRef.current;
        const input = div.querySelector('input');
        input.focus();
        next(true);
      }, 300);
    }
  }, [stage, showMenu]);

  const handlerStart = () => {
    onStart();
    setShowStage(false);
    setTimeout(() => {
      setShowMenu(false);
      setShowStage(true);
    }, 300);
  };

  const handlerCheckAnswers = (e) => {
    const target = e.target;
    const form = target.closest('form span');
    setTimeout(() => {
      const inputs = [...form.querySelectorAll('input')];
      const check = inputs.every((input) => {
        const valid = input.classList.contains('valid');
        if (!valid) {
          input.focus();
        }
        return valid;
      });
      if (check) dispatch('next');
    }, 50);
  };

  useEffect(() => {
    if (show) {
      setShowStage(true);
    } else {
      setShowStage(false);
    }
  }, [show]);

  return (
    <Container className='stage-container' show={show} onSubmit={e => e.preventDefault()}
               onKeyDown={(e) => {
                 SoundKeyUp.play();
               }}
               onKeyUp={handlerCheckAnswers}>
       <DebugContainer className="debug">
        <StageInfo>{stage}</StageInfo>
        <ButtonTest onChange={(e) => {
          dispatch('next', Number(e.target.value));
        }}/>
        <ButtonNext onClick={e => {
          dispatch('next');
        }}>
          next
        </ButtonNext>
      </DebugContainer>
      <SvgContainer>
        <BgStage/>
      </SvgContainer>
      <Inner menu={showMenu}>
        {showMenu ? <Menu start={handlerStart}/>
          :
          <InnerInside ref={stagesRef}>
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
          </InnerInside>}
      </Inner>
    </Container>
  );
};