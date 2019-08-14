import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0904 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p className="p_block2">Izračunaj djeljenik ako je djelitelj 8, količnik 47 i ostatak 5.</p>
      <div className="centrirano fullwidth">
        <div className=" displayinline desno"><Input answer="381"/></div>
      </div>
    </div>
  );
};