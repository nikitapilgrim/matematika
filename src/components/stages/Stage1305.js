import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1305 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p className="p_block8 marginbottom20px">Djed, otac i sin imaju zajedno 142 godine. Sin ima 22 godine. Otac je dobio sina kad je imao 26 godina. Koliko
        je godina djedu?</p>
      <div className="centrirano">
        <div className="displayinline desno"><Input answer="72" type="text" className="kockicaInput6 fontclass" maxLength="3"/></div>
        <div className="displayinline lijevo"><h4 className="margin5">godine</h4></div>
      </div>
    </div>
  );
};