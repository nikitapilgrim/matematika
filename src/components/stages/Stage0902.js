import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0902 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Riješi jednačine:</Subtitle>
      <table width="80%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka1">
        <tbody>
        <tr>
          <td className="centrirano">9∙x = 459</td>
          <td className="centrirano">8∙n = 736</td>
        </tr>
        <tr>
          <td className="centrirano">x =<Input answer="87"/></td>
          <td className="centrirano">n =<Input answer="92"/></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="centrirano">b : 8 = 42</td>
          <td className="centrirano">x : 7 = 109</td>
        </tr>
        <tr>
          <td className="centrirano">b =<Input answer="336"/></td>
          <td className="centrirano">x =<Input answer="763"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};