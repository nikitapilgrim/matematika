import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0905 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>Farmer svaki dan donosi istu količinu mlijeka u zadrugu. Koliko je donio za tri dana ako je za 7 dana donio 392
        litra?</p>
      <div className="centrirano fullwidth">

        <div className="width90 displayinline desno"><Input /></div>
        <div className="width90 displayinline lijevo"><h4>litara</h4></div>
      </div>
    </div>
  );
};