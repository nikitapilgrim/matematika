import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0906 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p className="p_block2 marginbottom20px">Ako se djeljenik poveća 18 puta i djelitelj smanji 5 puta, kako se promijeni količnik?</p>
      <div className="centrirano">
        <div className="displayinline lijevo"><span className="p_block5 margin5">Količnik se poveća</span></div>
        <div className="displayinline desno"><Input className="margin5" answer="90"/></div>
        <div className="displayinline lijevo"><span className="p_block5">puta.</span></div>
      </div>
    </div>
  );
};