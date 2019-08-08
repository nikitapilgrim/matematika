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
          <td width="70" className="lijevo"><Input /></td>
          <td width="70" className="desno">480:48=</td>
          <td width="70" className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td width="70" className="desno">800:100=</td>
          <td width="70" className="lijevo"><Input /></td>
          <td width="70" className="desno">820:10=</td>
          <td width="70" className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td width="70" className="desno">750:75=</td>
          <td width="70" className="lijevo"><Input /></td>
          <td width="70" className="desno">400:100=</td>
          <td width="70" className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td width="70" className="desno">470:10=</td>
          <td width="70" className="lijevo"><Input /></td>
          <td width="70" className="desno">390:39=</td>
          <td width="70" className="lijevo"><Input /></td>
        </tr>

        </tbody>
      </table>
    </div>
);
};