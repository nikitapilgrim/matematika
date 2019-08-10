import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1002 = () => {
  return (
    <div>
      <Title>Brojevi do 10000</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>{`Napiši sadržaoce desetica n ako je 1150 < n
      < 1230`}</p>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="desno">1150 &lt;</td>
          <td className="centrirano"><Input answer="1160" placeholder="n"/></td>
          <td className="lijevo">&lt; 1230</td>
        </tr>
        <tr>
          <td className="desno">1150 &lt;</td>
          <td className="centrirano"><Input answer="1170" placeholder="n"/></td>
          <td className="lijevo">&lt; 1230</td>
        </tr>
        <tr>
          <td className="desno">1150 &lt;</td>
          <td className="centrirano"><Input answer="1180" placeholder="n"/></td>
          <td className="lijevo">&lt; 1230</td>
        </tr>
        <tr>
          <td className="desno">1150 &lt;</td>
          <td className="centrirano"><Input answer="1190" placeholder="n"/></td>
          <td className="lijevo">&lt; 1230</td>
        </tr>
        <tr>
          <td className="desno">1150 &lt;</td>
          <td className="centrirano"><Input answer="1200" placeholder="n"/></td>
          <td className="lijevo">&lt; 1230</td>
        </tr>
        <tr>
          <td className="desno">1150 &lt;</td>
          <td className="centrirano"><Input answer="1210" placeholder="n"/></td>
          <td className="lijevo">&lt; 1230</td>
        </tr>
        <tr>
          <td className="desno">1150 &lt;</td>
          <td className="centrirano"><Input answer="1220" placeholder="n"/></td>
          <td className="lijevo">&lt; 1230</td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};