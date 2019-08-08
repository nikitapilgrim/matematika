import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StageWrapper = ({children}) => {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};