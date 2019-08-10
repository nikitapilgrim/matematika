import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0701 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td width="70" className="desno">560:10=</td>
          <td width="70" className="lijevo"><Input answer="56"/></td>
          <td width="70" className="desno">480:48=</td>
          <td width="70" className="lijevo"><Input answer="10"/></td>
        </tr>
        <tr>
          <td width="70" className="desno">800:100=</td>
          <td width="70" className="lijevo"><Input answer="8"/></td>
          <td width="70" className="desno">820:10=</td>
          <td width="70" className="lijevo"><Input answer="82"/></td>
        </tr>
        <tr>
          <td width="70" className="desno">750:75=</td>
          <td width="70" className="lijevo"><Input answer="10"/></td>
          <td width="70" className="desno">400:100=</td>
          <td width="70" className="lijevo"><Input answer="4"/></td>
        </tr>
        <tr>
          <td width="70" className="desno">470:10=</td>
          <td width="70" className="lijevo"><Input answer="47"/></td>
          <td width="70" className="desno">390:39=</td>
          <td width="70" className="lijevo"><Input answer="10"/></td>
        </tr>

        </tbody>
      </table>
    </div>
);
};