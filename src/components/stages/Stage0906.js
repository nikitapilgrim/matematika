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
      <p>Ako se djeljenik poveća 18 puta i djelitelj smanji 5 puta, kako se promijeni količnik?</p>
      <div className="centrirano" style="width: 280px; margin: 30px auto;">
        <div className="displayinline lijevo"><h4>Količnik se poveća</h4></div>
        <div className="displayinline desno"><Input /></div>
        <div className="displayinline lijevo"><h4>puta.</h4></div>
      </div>
    </div>
  );
};