import React from 'react';

import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

import {ContainerIMG} from '../components/Layout/Background';

export default () => {
  const {width, height} = useWindowSize();
  return (
    <div>
      <ContainerIMG/>
      <Confetti
        width={width}
        height={height}
      />
    </div>

  );
}