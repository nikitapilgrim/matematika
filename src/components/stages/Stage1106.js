import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1106 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>Šest teka i 7 udžbenika je plaćeno 94 KM. Udžbenik je za 6 KM skuplji od teke. Kolika je cijena udžbenika, a
        kolika teke?</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="desno">Udžbenik</td>
          <td className="centrirano"><Input answer="10" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="lijevo">KM</td>
        </tr>
        <tr>
          <td className="desno">Teka</td>
          <td className="centrirano"><Input answer="4" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="lijevo">KM</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};