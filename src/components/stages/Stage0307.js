import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0307 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Ispiši brojeve za 10 veće od brojeva:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">357</td>
          <td className="lijevo"><Input answer="347"/></td>
        </tr>
        <tr>
          <td className="centrirano">900</td>
          <td className="lijevo"><Input answer="890"/></td>
        </tr>
        <tr>
          <td className="centrirano">709</td>
          <td className="lijevo"><Input answer="699"/></td>
        </tr>
        <tr>
          <td className="centrirano">471</td>
          <td className="lijevo"><Input answer="461"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};