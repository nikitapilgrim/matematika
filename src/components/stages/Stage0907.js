import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0907 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <table width="80%" border="0" cellSpacing="2" cellPadding="3" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">187 + 2∙187 =</td>
          <td className="lijevo"><Input answer="561"/></td>
        </tr>
        <tr>
          <td className="desno">(429 : 3)∙6 =</td>
          <td className="lijevo"><Input answer="858"/></td>
        </tr>
        <tr>
          <td className="desno">325∙3 – 325∙2 =</td>
          <td className="lijevo"><Input answer="325"/></td>
        </tr>
        <tr>
          <td className="desno">624 : 6∙7 =</td>
          <td className="lijevo"><Input answer="728"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};