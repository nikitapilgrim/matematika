import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1104 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>Za koliko se promijeni broj 2345 ako se cifra hiljada zamijeni sa cifrom stotica?</p>
      <div className="centrirano" style="width: 280px; margin: 30px auto;">
        <div className="displayinline lijevo"><h4>Za</h4></div>
        <div className="displayinline desno"><Input answer="900" type="text" className="kockicaInput6 fontclass" maxLength="3"/></div>
      </div>
    </div>
  );
};