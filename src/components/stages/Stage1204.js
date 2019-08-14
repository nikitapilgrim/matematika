import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1204 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p className="p_block8 ">Izračunaj koliko grama nedostaje</p>
      <p className="p_block8 marginbottom20px">do 1 kg</p>

      <table width="80%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano">456 g</td>
          <td className="centrirano">784 g</td>
          <td className="centrirano">506 g</td>
        </tr>
        <tr>
          <td className="centrirano">&#8675;</td>
          <td className="centrirano">&#8675;</td>
          <td className="centrirano">&#8675;</td>
        </tr>
        <tr>
          <td className="centrirano"><Input answer="554" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="216" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="494" type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};