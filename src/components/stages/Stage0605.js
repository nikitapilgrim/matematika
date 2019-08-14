import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0605 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Odgovori</Subtitle>
      <p className="p_block2">Na jednoj pozorišnoj predstavi bilo je 720 gledalaca. Koliko je bilo muškaraca, a koliko žena ako se zna da na
        svakih 7 muškaraca dolazi 8 žena.</p>

      <table border="0" cellSpacing="2" cellPadding="0" align="center" className="marginleft30px">
        <tbody>

        <tr>
          <td><Input answer="384"/><span className="p_block4">žene</span></td>
        </tr>
        <tr>
          <td><Input answer="336"/><span className="p_block4">muškaraca</span></td>
        </tr>

        </tbody>
      </table>
    </div>
);
};