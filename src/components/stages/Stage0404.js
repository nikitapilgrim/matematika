import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0404 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">612 – 25 =</td>
          <td className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td className="centrirano">987 – 48 =</td>
          <td className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td className="centrirano">378 + 52 =</td>
          <td className="lijevo"><Input /></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};