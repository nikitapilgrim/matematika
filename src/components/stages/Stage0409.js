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
      <p className="p_block3">Zbir dva uzastopna prirodna broja je 651.</p>
      <p className="p_block3 marginbottom20px">Odredi te brojeve.</p>
      <div className="centrirano fullwidth">

        <div className=" displayinline desno margin5"><Input answer="325"/></div>
        <div className=" displayinline desno margin5"><Input answer="326"/></div>
      </div>
    </div>
  );
};