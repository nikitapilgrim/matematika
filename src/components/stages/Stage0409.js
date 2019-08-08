import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0409 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Odgovori:</Subtitle>
      <p>Zbir dva uzastopna prirodna broja je 651. Odredi te brojeve.</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><Input /></div>
        <div className="width90 displayinline desno"><Input /></div>
      </div>
    </div>
  );
};