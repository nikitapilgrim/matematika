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

      <table width="70%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="nowrap">21 =</td>
          <td className="nowrap"> 6</td>
          <td className="nowrap">∙ 3 +</td>
          <td className="nowrap"><Input answer="3"/></td>
        </tr>
        <tr>
          <td className="nowrap">52 =</td>
          <td className="nowrap"><Input answer="8"/></td>
          <td className="nowrap">∙ 6 +</td>
          <td className="nowrap"><Input answer="4"/></td>
        </tr>
        <tr>
          <td className="nowrap">44 =</td>
          <td className="nowrap"><Input answer="5"/></td>
          <td className="nowrap">∙ 8 +</td>
          <td className="nowrap"><Input answer="4"/></td>
        </tr>
        <tr>
          <td className="nowrap">68 =</td>
          <td className="nowrap"><Input answer="7"/></td>
          <td className="nowrap">∙ 9 +</td>
          <td className="nowrap"><Input answer="5"/></td>
        </tr>
        <tr>
          <td className="nowrap">38 =</td>
          <td className="nowrap"><Input answer="9"/></td>
          <td className="nowrap">∙ 4 +</td>
          <td className="nowrap"><Input answer="2"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};