import React from 'react';
import styled from 'styled-components';
import Bg from '../../assets/svg/background-extended.svg';
import BgIMG from '../../assets/img/background-standard.jpg';
/*
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
  filter: blur(8px);
   @media (max-width: 600px) {
    width: 920px;
  }
`;
*/

const Container = styled.div`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0%;
  right: 0;
  bottom: 0;
  filter: blur(8px);
  background: url(${BgIMG}) no-repeat center center fixed; 
  background-size: cover;
`;

export const Background = () => {

  return (
    <Container/>
  );
};