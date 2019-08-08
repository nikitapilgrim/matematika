import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1202 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p>Bjelašnica je visoka 2 km 6 dam 7m, a Jahorina 1 km 9 hm 1 dam 6 m. Izračunaj koliko je Bjelašnica viša od
        Jahorine?</p>
      <div className="centrirano" style="width: 100%; margin: 30px auto;">
        <div className="displayinline desno"><Input type="text" className="kockicaInput6 fontclass" maxLength="3"/>
        </div>
        <div className="displayinline lijevo"><h4>m</h4></div>
      </div>
    </div>
  );
};