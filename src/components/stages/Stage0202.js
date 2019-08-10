import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0202 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="desno">(36 + 18) : 9 =</td>
          <td className="lijevo"><Input answer="6"/></td>
        </tr>
        <tr>
          <td className="desno">(91 - 55) : 6 =</td>
          <td className="lijevo"><Input answer="6"/></td>
        </tr>
        <tr>
          <td className="desno">93 - 49 : 7 =</td>
          <td className="lijevo"><Input answer="86"/></td>
        </tr>
        <tr>
          <td className="desno">76 + 54 : 6 =</td>
          <td className="lijevo"><Input answer="85"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};