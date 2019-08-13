import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 36px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const Title = ({name, children}) => {
  return (
    <H1>{name || children}</H1>
  );
};