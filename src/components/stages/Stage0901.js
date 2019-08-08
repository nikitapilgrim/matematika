import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0901 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Riješi jednačine:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka1">
        <tbody>
        <tr>
          <td className="centrirano">3∙x = 258</td>
          <td className="centrirano">5∙n = 625</td>
        </tr>
        <tr>
          <td className="centrirano">x =<Input /></td>
          <td className="centrirano">n =<Input /></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="centrirano">6∙a = 732</td>
          <td className="centrirano">4∙x = 348</td>
        </tr>
        <tr>
          <td className="centrirano">a =<Input /></td>
          <td className="centrirano">x =<Input /></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};