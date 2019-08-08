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
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela1x5">
        <tbody>
        <tr>
          <td className="centrirano" width="220">38+x=96</td>
          <td className="backgroundbeige" width="100">x=<Input /></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">x–27=68</td>
          <td className="backgroundbeige" width="100">x=<Input /></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">82–n=56</td>
          <td className="backgroundbeige" width="100">n=<Input /></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">n+29=64</td>
          <td className="backgroundbeige" width="100">n=<Input /></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};