import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0102 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Riješi jednačine</Subtitle>
      <table border="0" cellSpacing="2" cellPadding="0" align="center" className="col2_table col2_margin_1">
        <tbody>
        <tr>
          <td width="150" className="centrirano fontsize20 col2_table_cell">38+x=96</td>
          <td width="150" className="backgroundbeige padding5 col2_table_cell">x= <Input className="backgroundwhite margin5" answer="58"/></td>
        </tr>
        <tr>
          <td width="150" className="centrirano fontsize20 col2_table_cell">x–27=68</td>
          <td width="150" className="backgroundbeige padding5 col2_table_cell">x= <Input className="backgroundwhite margin5" answer="95"/></td>
        </tr>
        <tr>
          <td width="150" className="centrirano fontsize20 col2_table_cell">82–n=56</td>
          <td width="150" className="backgroundbeige padding5 col2_table_cell">n= <Input className="backgroundwhite margin5" answer="26"/></td>
        </tr>
        <tr>
          <td width="150" className="centrirano fontsize20 col2_table_cell">n+29=64</td>
          <td width="150" className="backgroundbeige padding5 col2_table_cell">n= <Input className="backgroundwhite margin5" answer="35"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};