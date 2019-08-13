import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    font-size: 20px;
    margin: 0;
    margin-top: 1px;
    margin-bottom: 15px;
   
    @media (max-width: 600px) {
        font-size: 15px;
        margin-bottom: 10px;
    }
`;

export const Subtitle = ({name, children}) => {
  return (
    <H2>{name || children}</H2>
  );
};