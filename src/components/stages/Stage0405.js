import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0405 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">432 + 268 =</td>
          <td className="lijevo"><Input answer="700"/></td>
        </tr>
        <tr>
          <td className="centrirano">185 + 376 =</td>
          <td className="lijevo"><Input answer="561"/></td>
        </tr>
        <tr>
          <td className="centrirano">826 – 348 =</td>
          <td className="lijevo"><Input answer="478"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};