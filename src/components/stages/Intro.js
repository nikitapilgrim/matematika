import React, {useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import Title from '../../assets/svg/title-illustration.svg';

/*
const SvgList = [
  require('../../assets/svg/tests/test-01.svg'),
  require('../../assets/svg/tests/test-02.svg'),
  require('../../assets/svg/tests/test-03.svg'),
  require('../../assets/svg/tests/test-04.svg'),
  require('../../assets/svg/tests/test-05.svg'),
  require('../../assets/svg/tests/test-06.svg'),
  require('../../assets/svg/tests/test-07.svg'),
  require('../../assets/svg/tests/test-08.svg'),
  require('../../assets/svg/tests/test-09.svg'),
  require('../../assets/svg/tests/test-10.svg'),
  require('../../assets/svg/tests/test-11.svg'),
  require('../../assets/svg/tests/test-12.svg'),
  require('../../assets/svg/tests/test-13.svg'),
];*/


const hide = keyframes`
  0% {
      opacity: 1;
      transform: scale(1)
  }
  100% {
      opacity: 0;
      transform: scale(0.25)
  }
`;

const show = keyframes`
  0% {
      opacity: 0;
      transform: scale(0.25)
  }
  100% {
      opacity: 1;
      transform: scale(1)
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 75vw;
  z-index: 1;
  max-width: 600px;
  opacity: 0;
  transform: scale(0.25);
  animation: ${props => props.show ? show : hide} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const TextWrapper = styled.p`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
    position: relative;
    top: 5%;
    font-size: 300%;
    color: white;
`;

export const Intro = ({show, text}) => {

  return (
    <Wrapper show={show}>
      <Title/>
      <TextWrapper><Text>{text}</Text></TextWrapper>
    </Wrapper>
  );
};