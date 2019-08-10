import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0705 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj brzo i tačno:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">292:8-276:8=</td>
          <td className="centrirano"><Input answer="2"/></td>
        </tr>
        <tr>
          <td className="desno">286:5–261:5=</td>
          <td className="centrirano"><Input answer="5"/></td>
        </tr>
        <tr>
          <td className="desno">178:7–129:7=</td>
          <td className="centrirano"><Input answer="7"/></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
};