import React, {useState} from 'react';
import styled from 'styled-components';
import Title from '../assets/svg/title-illustration.svg';
import useStoreon from 'storeon/react';

const TitleContainer = styled.div`
  position: relative;
  width: 75vw;
  z-index: 1;
`;

const ProgressWrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 25%;
  width: 50%;
  border: 2px solid #FF0000;
  border-radius: 3px;
  padding: 2px;
  background-color: #C2DC9F;
  transform: rotate(-2deg);
`;
const Progress = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFf;
  background-color: #FF0000;
  border-radius: 3px;
  width: ${props => props.progress}%;
`;

const Count = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Preload = () => {
  const {dispatch, progress} = useStoreon('progress');

  return (
    <TitleContainer>
      <Title/>
      <ProgressWrapper>
        <Progress progress={progress}>
          <Count>{progress}%</Count>
        </Progress>
      </ProgressWrapper>
    </TitleContainer>
  );
};