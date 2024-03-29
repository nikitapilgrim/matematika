import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0503 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Odgovori:</Subtitle>
      <p className="p_block2">Dva radnika na nekom poslu zarade 932 KM. Ako jedan od njih potroši od te zarade 160 KM, a drugi 72 KM ostane
        im jednaka suma novca. Koliko je svaki od njih zaradio?</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4x3">
        <tbody>
        <tr>
          <td><Input className="desno margin5" answer="510"/><span className="marginright10px">KM</span> <Input className="desno margin5" answer="422"/><span className="marginright10px">KM</span></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};