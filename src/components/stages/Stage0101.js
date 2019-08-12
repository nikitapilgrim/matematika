import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0101 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj (upiši rješenje):</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="desno">73+(42–18)=</td>
          <td className="lijevo"><Input answer="97"/></td>
        </tr>
        <tr>
          <td className="desno">94-(26+17)=</td>
          <td className="lijevo"><Input answer="53"/></td>
        </tr>
        <tr>
          <td className="desno">100–34–26=</td>
          <td className="lijevo"><Input answer="40"/></td>
        </tr>
        <tr>
          <td className="desno">57+36–27=</td>
          <td className="lijevo"><Input answer="66"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
