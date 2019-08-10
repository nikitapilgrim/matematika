import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0802 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Popuni kvadratiće odgovarajućim brojevima:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td>21 =</td>
          <td> 6</td>
          <td>∙ 3 +</td>
          <td><Input answer="3"/></td>
        </tr>
        <tr>
          <td>52 =</td>
          <td><Input answer="8"/></td>
          <td>∙ 6 +</td>
          <td><Input answer="4"/></td>
        </tr>
        <tr>
          <td>44 =</td>
          <td><Input answer="5"/></td>
          <td>∙ 8 +</td>
          <td><Input answer="4"/></td>
        </tr>
        <tr>
          <td>68 =</td>
          <td><Input answer="7"/></td>
          <td>∙ 9 +</td>
          <td><Input answer="5"/></td>
        </tr>
        <tr>
          <td>38 =</td>
          <td><Input answer="9"/></td>
          <td>∙ 4 +</td>
          <td><Input answer="2"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};