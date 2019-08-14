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
      <table width="200" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela1x5">
        <tbody>
        <tr>
          <td width="100" className="centrirano fontsize15">38+x=96</td>
          <td width="100" className="backgroundbeige padding5">x= <Input className="backgroundwhite margin5" answer="58"/></td>
        </tr>
        <tr>
          <td width="100" className="centrirano fontsize15">x–27=68</td>
          <td width="100" className="backgroundbeige padding5">x= <Input className="backgroundwhite margin5" answer="95"/></td>
        </tr>
        <tr>
          <td width="100" className="centrirano fontsize15">82–n=56</td>
          <td width="100" className="backgroundbeige padding5">n= <Input className="backgroundwhite margin5" answer="26"/></td>
        </tr>
        <tr>
          <td width="100" className="centrirano fontsize15">n+29=64</td>
          <td width="100" className="backgroundbeige padding5">n= <Input className="backgroundwhite margin5" answer="35"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};