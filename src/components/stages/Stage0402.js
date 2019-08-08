import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0402 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">360 – 180 =</td>
          <td className="lijevo"><Input/></td>
        </tr>
        <tr>
          <td className="centrirano">960 – 380 =</td>
          <td className="lijevo"><Input/></td>
        </tr>
        <tr>
          <td className="centrirano">640 + 290 =</td>
          <td className="lijevo"><Input/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};