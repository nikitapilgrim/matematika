import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1205 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p className="p_block8 marginbottom20px">Izračunaj dužinu u metrima:</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano p_block7">8 kg 62 dag 40 g + 1 kg 23 dag 80 g = <Input answer="9970" type="text"
                                                                             className="kockicaInput2 fontclass"
                                                                             maxLength="5"/></td>
        </tr>
        <tr>
          <td className="centrirano p_block7">3 kg 18 dag 20 g + 5 kg 82 dag 90 g =<Input answer="9110" type="text"
                                                                            className="kockicaInput2 fontclass"
                                                                            maxLength="5"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};