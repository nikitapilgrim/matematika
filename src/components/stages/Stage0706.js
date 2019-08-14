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
      <p className="p_block2 marginbottom20px">Zbir tri broja je 440. Prvi od njih je dva puta manji od drugog, a 7 puta veći od trećeg. Koji su to
        brojevi?</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano">Broj 1</td>
          <td className="centrirano">Broj 2</td>
          <td className="centrirano">Broj 3</td>
        </tr>
        <tr>
          <td className="centrirano"><Input answer="140"/></td>
          <td className="centrirano"><Input answer="280"/></td>
          <td className="centrirano"><Input answer="20"/></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
};