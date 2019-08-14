import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0306 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Ispiši brojeve za 10 veće od brojeva:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_1">
        <tbody>
        <tr>
          <td className="desno col2_table_cell fontsize20">498</td>
          <td className="lijevo col2_table_cell"><Input answer="508"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">789</td>
          <td className="lijevo col2_table_cell"><Input answer="799"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell fontsize20">409</td>
          <td className="lijevo col2_table_cell"><Input answer="419"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};