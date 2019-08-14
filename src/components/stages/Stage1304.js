import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1304 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p className="p_block8 marginbottom20px">Tvornica sokova je proizvela 6kl 4hl i 2dal soka. Prodala je 4kl 7hl i 4dal soka. Koliko je soka ostalo?</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka1">
        <tbody>
        <tr>
          <td className="centrirano">535:5∙4=</td>
          <td><Input answer="428" type="text" className="kockicaInput6 fontclass" maxLength="3"/></td>
          <td className="centrirano">328:2∙6=</td>
          <td><Input answer="984" type="text" className="kockicaInput6 fontclass" maxLength="3"/></td>
        </tr>
        <tr>

        </tr>
        <tr>
          <td className="centrirano">156∙5:2=</td>
          <td><Input answer="390" type="text" className="kockicaInput6 fontclass" maxLength="3"/></td>
          <td className="centrirano">196∙2:7=</td>
          <td><Input answer="56" type="text" className="kockicaInput6 fontclass" maxLength="3"/></td>

        </tr>
        </tbody>
      </table>
    </div>
  );
};