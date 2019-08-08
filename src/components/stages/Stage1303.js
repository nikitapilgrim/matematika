import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1303 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p>Tvornica sokova je proizvela 6kl 4hl i 2dal soka. Prodala je 4kl 7hl i 4dal soka. Koliko je soka ostalo?</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="centrirano"><Input type="text" className="kockicaInput6 fontclass" maxLength="5"/></td>
          <td className="desno">kl</td>
          <td className="centrirano"><Input type="text" className="kockicaInput6 fontclass" maxLength="5"/></td>
          <td className="desno">hl</td>
          <td className="centrirano"><Input type="text" className="kockicaInput6 fontclass" maxLength="5"/></td>
          <td className="desno">dal</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};