import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1003 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <p className="p_block7">{`Napiši sadržaoce stotica x ako je: 2300 < x < 3100`}</p>
      <table width="80%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input answer="2400" type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input answer="2500" type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input answer="2600" type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input answer="2700" type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input answer="2800" type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input answer="2900" type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input answer="3000" type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};