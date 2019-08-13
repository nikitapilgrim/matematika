import React, {useState, useRef, useLayoutEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';
import Title from '../assets/svg/title-illustration.svg';

const slide = (y) => keyframes`
  0% {
      transform: translateY(-${y}px);
  }
  100% {
      transform: translateY(-150px);
  }
`;

const hide = props => keyframes`
  0% {
      opacity: 1;
      transform: translateY(-150px);
  }
  100% {
      opacity: 0;
      transform: translateY(-30vh);
  }
`;
const animationHide = props => css`
      ${props.hide && hide()} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const animation = props => css`
    ${props.show && slide(props.offsetHeight)} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  `;

const TitleContainer = styled.div`
  position: relative;
  width: 75vw;
  z-index: 1;
  transform: translateY(${props => props.offsetHeight}px);
  animation: ${props => props.hide ? animationHide : animation}
`;

export const IntroLogo = ({show, hide}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    setOffset(ref.current.offsetHeight + window.innerHeight);
  });

  return (
    <TitleContainer offsetHeight={offset} ref={ref} hide={hide} show={show}>
      <Title/>
    </TitleContainer>
  );
};