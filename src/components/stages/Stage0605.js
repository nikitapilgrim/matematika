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
      <p>Na jednoj pozorišnoj predstavi bilo je 720 gledalaca. Koliko je bilo muškaraca, a koliko žena ako se zna da na
        svakih 7 muškaraca dolazi 8 žena.</p>

      <table width="100:" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka1"
             style="margin-top: 30px;">
        <tbody>

        <tr>
          <td className="lijevo"><input /> žene</td>
        </tr>
        <tr>
          <td className="lijevo"><input /> muškaraca</td>
        </tr>

        </tbody>
      </table>
    </div>
);
};