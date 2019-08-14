import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0805 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Napiši ostatak dijeljenja:</Subtitle>

      <table width="90%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno nowrap">524 : 7 =</td>
          <td className="lijevo nowrap"><Input answer="6"/></td>
          <td className="desno nowrap">711 : 9 =</td>
          <td className="lijevo nowrap"><Input answer="0"/></td>
        </tr>
        <tr>
          <td className="desno nowrap">638 : 5 =</td>
          <td className="lijevo nowrap"><Input answer="3"/></td>
          <td className="desno nowrap">456 : 9 =</td>
          <td className="lijevo nowrap"><Input answer="6"/></td>
        </tr>
        <tr>
          <td className="desno nowrap">824 : 6 =</td>
          <td className="lijevo nowrap"><Input answer="2"/></td>
          <td className="desno nowrap">625 : 4 =</td>
          <td className="lijevo nowrap"><Input answer="1"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};