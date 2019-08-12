import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1301 = () => {
  return (
    <div>
      <Title>Mjerenje veličina</Title>
      <Subtitle>Računaj:</Subtitle>
      <p>Računaj u ml:</p>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">9l 5dl 3cl 8ml</td>
          <td className="lijevo"> = <Input answer="9539" type="text" className="kockicaInput6 fontclass" maxLength="5"/> ml</td>
        </tr>
        <tr>
          <td className="desno">4l 14dl 5cl 12ml</td>
          <td className="lijevo"> = <Input answer="5462" type="text" className="kockicaInput6 fontclass" maxLength="5"/> ml</td>
        </tr>
        <tr>
          <td className="desno">2l 25dl 62cl 3ml</td>
          <td className="lijevo"> = <Input answer="5121" type="text" className="kockicaInput6 fontclass" maxLength="5"/> ml</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};