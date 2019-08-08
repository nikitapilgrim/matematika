import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0403 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="280" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">449 + 56 =</td>
          <td className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td className="centrirano">384 + 68 =</td>
          <td className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td className="centrirano">837 – 45 =</td>
          <td className="lijevo"><Input /></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};