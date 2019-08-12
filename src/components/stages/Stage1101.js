import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1101 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>Napiši najveći petocifreni broj ciframa 1, 8, 3, 6, 7</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
        </tr>
        <tr>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};