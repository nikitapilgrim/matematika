import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0401 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">430 + 280 =</td>
          <td className="lijevo"><Input answer="710"/></td>
        </tr>
        <tr>
          <td className="centrirano">160 + 250 =</td>
          <td className="lijevo"><Input answer="410"/></td>
        </tr>
        <tr>
          <td className="centrirano">820 – 140 =</td>
          <td className="lijevo"><Input answer="680"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};