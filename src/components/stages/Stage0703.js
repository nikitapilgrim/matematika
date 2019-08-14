import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0703 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>
      <table width="80%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka1">
        <tbody>
        <tr>
          <td className="centrirano">6∙n = 600</td>
          <td className="centrirano">100∙x = 700</td>
        </tr>
        <tr>
          <td className="centrirano">n =<Input answer="600"/></td>
          <td className="centrirano">x =<Input answer="7"/></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="centrirano">56∙x = 560</td>
          <td className="centrirano">800 : a = 80</td>
        </tr>
        <tr>
          <td className="centrirano">x =<Input answer="10"/></td>
          <td className="centrirano">a =<Input answer="10"/></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="centrirano">460 : x = 46</td>
          <td className="centrirano">420 : n = 10</td>
        </tr>
        <tr>
          <td className="centrirano">n =<Input answer="10"/></td>
          <td className="centrirano">x =<Input answer="42"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};