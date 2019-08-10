import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1105 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>Za koliko se promijeni broj 2345 ako se cifra hiljada zamijeni sa cifrom stotica?</p>
      <p>Napiši sve četverocifrene brojeve veće od 9994.</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="centrirano"><Input answer="9995" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="9996" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="9997" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
        </tr>
        <tr>
          <td className="centrirano"><Input answer="9998" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="9999" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};