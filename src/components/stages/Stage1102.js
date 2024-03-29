import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1102 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Računaj:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">2380 + 4850 =</td>
          <td className="lijevo"><Input answer="7230" type="text" className="kockicaInput2 fontclass" maxLength="3"/></td>
        </tr>
        <tr>
          <td className="desno">8960 – 3570 =</td>
          <td className="lijevo"><Input answer="5390" type="text" className="kockicaInput2 fontclass" maxLength="3"/></td>
        </tr>
        <tr>
          <td className="desno">4820 + 1490 =</td>
          <td className="lijevo"><Input answer="6310" type="text" className="kockicaInput2 fontclass" maxLength="3"/></td>
        </tr>
        <tr>
          <td className="desno">3480 – 1790 =</td>
          <td className="lijevo"><Input type="text" className="kockicaInput2 fontclass" maxLength="3"/></td>
        </tr>
        <tr>
          <td className="desno">4370 + 2480 =</td>
          <td className="lijevo"><Input answer="6850" type="text" className="kockicaInput2 fontclass" maxLength="3"/></td>
        </tr>
        <tr>
          <td className="desno">7820 – 3260 =</td>
          <td className="lijevo"><Input answer="4560" type="text" className="kockicaInput2 fontclass" maxLength="3"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};