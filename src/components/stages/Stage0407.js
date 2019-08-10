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
      <h4>Riješi jednačine:</h4>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela1x5">
        <tbody>
        <tr>
          <td className="centrirano" width="220">236 + x = 547</td>
          <td className="backgroundbeige" width="100">x =<Input answer="311"/></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">n + 128 = 612</td>
          <td className="backgroundbeige" width="100">n=<Input answer="484"/></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">x – 186 = 438</td>
          <td className="backgroundbeige" width="100">x =<Input answer="624"/></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">648 – n = 129</td>
          <td className="backgroundbeige" width="100">n =<Input answer="519"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};