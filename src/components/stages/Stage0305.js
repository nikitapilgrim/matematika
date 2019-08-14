import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0305 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Napiši rimskim znakovima brojeve:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_1">
        <tbody>
        <tr>
          <td className="desno col2_table_cell fontsize20">562</td>
          <td className="lijevo col2_table_cell"><Input answer="DLXII"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">837</td>
          <td className="lijevo col2_table_cell"><Input answer="DCCCXXXVII"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">456</td>
          <td className="lijevo col2_table_cell"><Input answer="CDLVI"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">748</td>
          <td className="lijevo col2_table_cell"><Input answer="DCCXLVIII"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};