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
      <p>Izračunaj koliko mililitara nedostaje do 1 litra:</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
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
          <td className="centrirano"><Input type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input type="text" className="kockicaInput7 fontclass" maxLength="5"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};