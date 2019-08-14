import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0407 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="col2_table col2_margin_3">
        <tbody>
        <tr>
          <td className="desno col2_table_cell_2 fontsize20 nowrap">236 + x = 547</td>
          <td className="backgroundbeige centrirano col2_table_cell nowrap" width="100">x =<Input className="backgroundwhite" answer="311"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell_2 fontsize20 nowrap">n + 128 = 612</td>
          <td className="backgroundbeige centrirano col2_table_cell nowrap">n=<Input className="backgroundwhite" answer="484"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell_2 fontsize20 nowrap">x – 186 = 438</td>
          <td className="backgroundbeige centrirano col2_table_cell nowrap">x =<Input className="backgroundwhite" answer="624"/></td>
        </tr>
        <tr>
          <td className="desno col2_table_cell_2 fontsize20 nowrap">648 – n = 129</td>
          <td className="backgroundbeige centrirano col2_table_cell nowrap">n =<Input className="backgroundwhite" answer="519"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};