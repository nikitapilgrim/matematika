import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1003 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>{`Napiši sadržaoce stotica x ako je: 2300 < x < 3100`}</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>
        <tr>
          <td className="desno">2300 &lt;</td>
          <td className="centrirano"><Input type="text" className="kockicaInput2 fontclass" maxLength="5"
                                            placeholder="x"/></td>
          <td className="lijevo">&lt; 3100</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};