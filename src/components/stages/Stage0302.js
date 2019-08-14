import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0302 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje)</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="6" align="center" className="fontclass tabela2x5 left01">
        <tbody>
        <tr>
          <td className="desno">200 + 400 =</td>
          <td className="lijevo"><Input answer="600"/></td>
        </tr>
        <tr>
          <td className="desno">500 + 300 =</td>
          <td className="lijevo"><Input answer="800"/></td>
        </tr>
        <tr>
          <td className="desno">700 + 200 =</td>
          <td className="lijevo"><Input answer="900"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};