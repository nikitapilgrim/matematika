import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1302 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p className="p_block8 marginbottom20px">Izračunaj koliko mililitara nedostaje do 1 litra:</p>

      <table width="70%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano">256 ml</td>
          <td className="centrirano">824 ml</td>
          <td className="centrirano">576 ml</td>
        </tr>
        <tr>
          <td className="centrirano">&#8675;</td>
          <td className="centrirano">&#8675;</td>
          <td className="centrirano">&#8675;</td>
        </tr>
        <tr>
          <td className="centrirano"><Input answer="744" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="176" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="424"  type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};