import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0604 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">(72 + 36 - 18) : 9 =</td>
          <td className="centrirano"><Input answer="10"/></td>
        </tr>
        <tr>
          <td className="desno">(42 + 36-12) : 6 =</td>
          <td className="centrirano"><Input answer="11"/></td>
        </tr>
        <tr>
          <td className="desno">(63 + 49–14) : 7 =</td>
          <td className="centrirano"><Input answer="14"/></td>
        </tr>
        <tr>
          <td className="desno">(45 + 81–36) : 9 =</td>
          <td className="centrirano"><Input answer="10"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};