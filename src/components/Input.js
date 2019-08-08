import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  border: none;
  height: 35px;
  width: 80px;
  padding: 0;
  margin: 0;
  text-align: center;
  background-color: beige;
  @media (max-width: 600px) {
        height: 30px;
        width: 60px;
    }
`;

export const Input = ({onClick, answer}) => {
  return (
    <InputStyled onClick={onClick}/>
  )
};