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
      <p className="p_block8 marginbottom20px">Bjelašnica je visoka 2 km 6 dam 7m, a Jahorina 1 km 9 hm 1 dam 6 m. Izračunaj koliko je Bjelašnica viša od
        Jahorine?</p>
      <div className="centrirano">
        <div className="displayinline desno"><Input answer="151" type="text" className="kockicaInput6 fontclass" maxLength="3"/>
        </div>
        <div className="displayinline lijevo"><h4 className="margin5">m</h4></div>
      </div>
    </div>
  );
};