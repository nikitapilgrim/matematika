import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0502 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj:</Subtitle>
      <p className="p_block2">Od zbira brojeva 427 i 256 oduzmi njihovu razliku.</p>
      <div className="centrirano fullwidth">
        <div className=" displayinline desno"><Input answer="512"/></div>
      </div>
    </div>
  );
};