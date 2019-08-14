import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0603 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="3" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">(9 + 5)∙3 =</td>
          <td className="lijevo"><Input answer="42" type="text" className="kockicaInput6 fontclass" maxLength="3"/></td>
        </tr>
        <tr>
          <td className="desno">5∙3∙2∙10 =</td>
          <td className="lijevo"><Input answer="300" type="text" className="kockicaInput6 fontclass" maxLength="3"/></td>
        </tr>
        <tr>
          <td className="desno">(15 – 9)∙6</td>
          <td className="lijevo"><Input answer="36" type="text" className="kockicaInput6 fontclass" maxLength="3"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};