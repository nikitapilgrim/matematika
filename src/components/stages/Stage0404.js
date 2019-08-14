import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0404 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_2">
        <tbody>
        <tr>
          <td className="desno col2_table_cell fontsize20">612 – 25 =</td>
          <td className="lijevo col2_table_cell"><Input answer="587"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">987 – 48 =</td>
          <td className="lijevo col2_table_cell"><Input answer="939"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">378 + 52 =</td>
          <td className="lijevo col2_table_cell"><Input answer="430"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};