import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0401 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_2">
        <tbody>
        <tr>
          <td className="desno col2_table_cell fontsize20">430 + 280 =</td>
          <td className="lijevo col2_table_cell"><Input answer="710"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">160 + 250 =</td>
          <td className="lijevo col2_table_cell"><Input answer="410"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">820 – 140 =</td>
          <td className="lijevo col2_table_cell"><Input answer="680"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};