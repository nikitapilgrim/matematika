import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1203 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p className="p_block8">Izračunaj koliko milimetara nedostaje</p>
      <p className="p_block8 marginbottom20px">do 1m</p>

      <table width="80%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano">326 mm</td>
          <td className="centrirano">542 mm</td>
          <td className="centrirano">836 mm</td>
        </tr>
        <tr>
          <td className="centrirano">&#8675;</td>
          <td className="centrirano">&#8675;</td>
          <td className="centrirano">&#8675;</td>
        </tr>
        <tr>
          <td className="centrirano"><Input answer="674" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="458" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="164" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};