import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0307 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Ispiši brojeve za 10 veće od brojeva:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_1">
        <tbody>
        <tr>
          <td className="desno col2_table_cell fontsize20">357</td>
          <td className="lijevo col2_table_cell"><Input answer="347"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">900</td>
          <td className="lijevo col2_table_cell"><Input answer="890"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">709</td>
          <td className="lijevo col2_table_cell"><Input answer="699"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">471</td>
          <td className="lijevo col2_table_cell"><Input answer="461"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};