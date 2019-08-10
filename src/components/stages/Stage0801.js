import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0801 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>{`Koji su brojevi iz skupa S ={23, 35, 42, 57, 63, 48, 28} djeljivi sa 7?`}</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="centrirano">Broj 1</td>
          <td className="centrirano">Broj 2</td>
          <td className="centrirano">Broj 3</td>
          <td className="centrirano">Broj 4</td>
        </tr>
        <tr>
          <td className="centrirano"><Input answer="35"/></td>
          <td className="centrirano"><Input answer="42"/></td>
          <td className="centrirano"><Input answer="63"/></td>
          <td className="centrirano"><Input answer="28"/></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
};