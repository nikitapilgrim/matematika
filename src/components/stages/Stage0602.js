import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0602 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">4∙2∙7∙10 =</td>
          <td className="lijevo"><Input answer="560"/></td>
        </tr>
        <tr>
          <td className="desno">(8 + 3)∙7 =</td>
          <td className="lijevo"><Input answer="77"/></td>
        </tr>
        <tr>
          <td className="desno">9∙4∙2∙10 =</td>
          <td className="lijevo"><Input answer="720"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};