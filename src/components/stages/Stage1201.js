import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1201 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p>Izračunaj dužinu u metrima:</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td className="desno">4hm 5dam 8m+5hm 3dam 3m = <Input type="text" className="kockicaInput2 fontclass"
                                                                 maxLength="5"/></td>
        </tr>
        <tr>
          <td className="desno">2hm 11dam 12m = <Input type="text" className="kockicaInput2 fontclass" maxLength="5"/>
          </td>
        </tr>
        <tr>
          <td className="desno">2hm 11dam 12m = <Input type="text" className="kockicaInput2 fontclass" maxLength="5"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};