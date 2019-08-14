import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0103 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Riješi jednačine</Subtitle>
      <p className="p_block">Na vagi je 5 kg i 47 dag krompira. Koliko nedostaje krompira da bude 6 kg?</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><Input answer="53"/></div>
        <div className="width90 displayinline lijevo"><h4>dag</h4></div>
      </div>
    </div>
  );
};