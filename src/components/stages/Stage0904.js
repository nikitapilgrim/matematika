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
      <p>Izračunaj djeljenik ako je djelitelj 8, količnik 47 i ostatak 5.</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><Input/></div>
      </div>
    </div>
  );
};