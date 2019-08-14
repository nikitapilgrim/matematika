import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0204 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Riješi jednačine:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="col2_table col2_margin_1">
        <tbody>
        <tr>
          <td className="centrirano fontsize20 col2_table_cell">8x = 72</td>
          <td className="backgroundbeige padding5 col2_table_cell" width="100">x=<Input className="backgroundwhite margin5" answer="9"/></td>
        </tr>
        <tr>
          <td className="centrirano fontsize20 col2_table_cell">4n = 36</td>
          <td className="backgroundbeige padding5 col2_table_cell">x=<Input className="backgroundwhite margin5" answer="9"/></td>
        </tr>
        <tr>
          <td className="centrirano fontsize20 col2_table_cell">x : 3 = 8</td>
          <td className="backgroundbeige padding5 col2_table_cell">x=<Input className="backgroundwhite margin5" answer="24"/></td>
        </tr>
        <tr>
          <td className="centrirano fontsize20 col2_table_cell">56 : n = 7</td>
          <td className="backgroundbeige padding5 col2_table_cell">n=<Input className="backgroundwhite margin5" answer="8"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};