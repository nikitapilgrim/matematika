import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0408 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Odgovori:</Subtitle>
      <p className="p_block2">Koji najveći prirodan broj možeš dodati broju 136 pa da dobiješ rezultat manji od broja 250?</p>
      <div className="centrirano fullwidth">
        <div className=" displayinline desno"><Input answer="113"/></div>
      </div>
    </div>
  );
};