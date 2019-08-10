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
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela1x5">
        <tbody>
        <tr>
          <td className="centrirano" width="220">8x = 72</td>
          <td className="backgroundbeige" width="100">x=<Input answer="9"/></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">4n = 36</td>
          <td className="backgroundbeige" width="100">x=<Input answer="9"/></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">x : 3 = 8</td>
          <td className="backgroundbeige" width="100">x=<Input answer="24"/></td>
        </tr>
        <tr>
          <td className="centrirano" width="220">56 : n = 7</td>
          <td className="backgroundbeige" width="100">n=<Input answer="8"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};