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
      <p className="p_block8 marginbottom20px">Tvornica sokova je proizvela 6kl 4hl i 2dal soka. Prodala je 4kl 7hl i 4dal soka. Koliko je soka ostalo?</p>
      <table width="90%" border="0" cellSpacing="2" cellPadding="0" align="center" className="">
        <tbody>
        <tr>
          <td className="desno"><Input answer="1" type="text" className="kockicaInput6 fontclass" maxLength="5"/></td>
          <td className="lijevo p_block8">kl</td>
          <td className="desno"><Input answer="6" type="text" className="kockicaInput6 fontclass" maxLength="5"/></td>
          <td className="lijevo p_block8">hl</td>
          <td className="desno"><Input answer="8" type="text" className="kockicaInput6 fontclass" maxLength="5"/></td>
          <td className="lijevo p_block8">dal</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};