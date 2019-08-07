import React from 'react';
import styled from 'styled-components'
import Title from '../assets/svg/title-illustration.svg'

const TitleContainer = styled.div`
  position: relative;
  z-index: 1;
`

export const IntroLogo = () => {
  return (
    <TitleContainer>
      <Title/>
    </TitleContainer>
  )
};