import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0403 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_2">
        <tbody>
        <tr>
          <td className="desno col2_table_cell fontsize20">449 + 56 =</td>
          <td className="lijevo col2_table_cell"><Input answer="505"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">384 + 68 =</td>
          <td className="lijevo col2_table_cell"><Input answer="452"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">837 – 45 =</td>
          <td className="lijevo col2_table_cell"><Input answer="792"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};