import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0406 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">537 – 269 =</td>
          <td className="lijevo"><Input answer="268"/></td>
        </tr>
        <tr>
          <td className="centrirano">326 + 185 =</td>
          <td className="lijevo"><Input answer="511"/></td>
        </tr>
        <tr>
          <td className="centrirano">741 – 236 =</td>
          <td className="lijevo"><Input answer="505"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};