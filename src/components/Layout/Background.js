import React from 'react';
import styled, {keyframes} from 'styled-components';
/*
import Bg from '../../assets/svg/background-extended.svg';
*/
import BgIMG from '../../assets/img/background-standard.jpg';


const blured = keyframes`
  0% {
      filter: blur(0px);
  }
  100% {
      filter: blur(8px);
  }
`;

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
  filter: blur(0px);
  animation: ${props => props.blur && blured} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   @media (max-width: 600px) {
    width: 920px;
  }
`;*/

export const ContainerIMG = styled.div`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0%;
  right: 0;
  bottom: 0;
  /*
  filter: blur(8px);
  */
  background: url(${BgIMG}) no-repeat center center fixed; 
  background-size: cover;
`;

export const Background = ({blur}) => {

  return (
    <ContainerIMG blur={blur}/>
  );
};