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
      <p>Napiši sve dekadne jedinice koje ste učili.</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="centrirano"><Input/></td>
          <td className="centrirano"><Input/></td>
          <td className="centrirano"><Input/></td>
          <td className="centrirano"><Input/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};