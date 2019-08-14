import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0402 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_2">
        <tbody>
        <tr>
          <td className="centrirano col2_table_cell fontsize20">360 – 180 =</td>
          <td className="lijevo col2_table_cell"><Input answer="180"/></td>
        </tr>
        <tr>
          <td className="centrirano col2_table_cell fontsize20">960 – 380 =</td>
          <td className="lijevo col2_table_cell"><Input answer="580"/></td>
        </tr>
        <tr>
          <td className="centrirano col2_table_cell fontsize20">640 + 290 =</td>
          <td className="lijevo col2_table_cell"><Input answer="930"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};