import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1005 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>Napiši sve četverocifrene brojeve čija je cifra hiljada 5, a veći su od 5994.</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="centrirano"><Input answer="5995" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="5996" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="5997" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
        </tr>
        <tr>
          <td className="centrirano"><Input answer="5998" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input answer="5999" type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};