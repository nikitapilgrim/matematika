import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0306 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Ispiši brojeve za 10 veće od brojeva:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">498</td>
          <td className="lijevo"><Input/></td>
        </tr>
        <tr>
          <td className="centrirano">789</td>
          <td className="lijevo"><Input/></td>
        </tr>
        <tr>
          <td className="centrirano">409</td>
          <td className="lijevo"><Input/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};