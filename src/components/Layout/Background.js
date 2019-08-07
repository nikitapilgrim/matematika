import React from 'react';
import styled from 'styled-components';
import Bg from '../../assets/svg/background-extended.svg';

const Container = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  z-index: 0;
  height: 100%;
  min-height: 100vh;
  width: 1920px;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  filter: blur(8px)
`;

export const Background = () => {

  return (
    <Container>
      <Bg/>
    </Container>
  );
};