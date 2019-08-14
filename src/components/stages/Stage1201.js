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
      <p className="p_block8 marginbottom20px">Izračunaj dužinu u metrima:</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="col2_margin_5">
        <tbody>
        <tr>
          <td className="desno p_block8 nowrap">4hm 5dam 8m+5hm 3dam 3m = <Input answer="991" type="text" className="kockicaInput2 fontclass"
                                                                 maxLength="5"/></td>
        </tr>
        <tr>
          <td className="desno p_block8 nowrap">2hm 11dam 12m = <Input answer="312" type="text" className="kockicaInput2 fontclass" maxLength="5"/>
          </td>
        </tr>
        <tr>
          <td className="desno p_block8 nowrap">2hm 11dam 12m = <Input  answer="593" type="text" className="kockicaInput2 fontclass" maxLength="5"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};