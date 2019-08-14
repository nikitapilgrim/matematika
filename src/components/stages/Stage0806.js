import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0806 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p className="p_block2">Izračunaj djeljenik ako je količnik 85, djelitelj 7 i ostatak 3.</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><h4 className="margin5">Rješenje</h4></div>
        <div className="width90 displayinline lijevo"><Input answer="598"/></div>
      </div>
    </div>
  );
};