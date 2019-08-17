import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import styled, {css, keyframes} from 'styled-components';
import useStoreon from 'storeon/react';

import {Menu} from './StageContainer/Menu';
import BgStage from '../assets/svg/stage.svg';
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
  background-color: ${props => props.menu ? '#FDDD5C' : '#FFF'};
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

export const StageContainer = ({show, next}) => {
  const {dispatch, stage, audio} = useStoreon('stage', 'audio');
  const [showMenu, setShowMenu] = useState(true);
  const [showStage, setShowStage] = useState(show);

  const stagesRef = useRef(null);

  useEffect(() => {
    if (stagesRef.current) {
      next(false);
      setTimeout(() => {
        const div = stagesRef.current;
        const input = div.querySelector('input');
        input.focus();
        next(true);
      }, 300);
    }
  }, [stage, showMenu]);

  const handlerStart = () => {
    setShowStage(false);
    setTimeout(() => {
      setShowMenu(false);
      setShowStage(true);
    }, 300);
  };

  const handlerCheckAnswers = (e) => {
    const target = e.target;
    const form = target.closest('form span');
    const inputs = [...form.querySelectorAll('input')];
    const check = inputs.every((input) => {
      return input.classList.contains('valid');
    });
    if (check) dispatch('next');
  };

  return (
    <Container className='stage-container' show={showStage} onSubmit={e => e.preventDefault()}
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
          <div ref={stagesRef}>
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
          </div>}
      </Inner>
    </Container>
  );
};