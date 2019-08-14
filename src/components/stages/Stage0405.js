import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0405 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_2">
        <tbody>
        <tr>
          <td className="desno col2_table_cell fontsize20  nowrap">432 + 268 =</td>
          <td className="lijevo col2_table_cell  nowrap"><Input answer="700"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20 nowrap">185 + 376 =</td>
          <td className="lijevo col2_table_cell nowrap"><Input answer="561"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20 nowrap">826 – 348 =</td>
          <td className="lijevo col2_table_cell nowrap"><Input answer="478"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};