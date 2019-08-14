import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1001 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p className="p_block6 marginbottom20px">Napiši sve dekadne jedinice koje ste učili.</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano"><Input answer="10"/></td>
          <td className="centrirano"><Input answer="100"/></td>
          <td className="centrirano"><Input answer="1000"/></td>
          <td className="centrirano"><Input answer="10000"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};