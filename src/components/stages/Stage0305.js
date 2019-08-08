import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0305 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Napiši rimskim znakovima brojeve:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="centrirano">562</td>
          <td className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td className="centrirano">837</td>
          <td className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td className="centrirano">456</td>
          <td className="lijevo"><Input /></td>
        </tr>
        <tr>
          <td className="centrirano">748</td>
          <td className="lijevo"><Input /></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};