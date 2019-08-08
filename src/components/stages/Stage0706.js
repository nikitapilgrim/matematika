import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0706 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj brzo i tačno:</Subtitle>
      <p>Zbir tri broja je 440. Prvi od njih je dva puta manji od drugog, a 7 puta veći od trećeg. Koji su to
        brojevi?</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="centrirano">Broj 1</td>
          <td className="centrirano">Broj 2</td>
          <td className="centrirano">Broj 3</td>
        </tr>
        <tr>
          <td className="centrirano"><Input /></td>
          <td className="centrirano"><Input /></td>
          <td className="centrirano"><Input /></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
};