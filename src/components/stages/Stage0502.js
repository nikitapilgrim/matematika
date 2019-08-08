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
      <p>Od zbira brojeva 427 i 256 oduzmi njihovu razliku.</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><Input /></div>
      </div>
    </div>
  );
};