import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0803 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Podijeli:</Subtitle>
      <table width="100%" border="0" cellSpacing="0" cellPadding="0" align="center" className="fontclass tabela4redka1">
        <tbody>
        <tr>
          <td className="desno">(15+21):3=</td>
          <td><Input/></td>
          <td className="desno">54:3=</td>
          <td><Input/></td>
          <td className="desno">135:3=</td>
          <td><Input/></td>
        </tr>
        <tr>

        </tr>
        <tr>
          <td className="desno">(24+72):8=</td>
          <td><Input/></td>
          <td className="desno">64:4=</td>
          <td><Input/></td>
          <td className="desno">264:4=</td>
          <td><Input/></td>
        </tr>
        <tr>

        </tr>
        <tr>
          <td className="desno">(54+30):6=</td>
          <td><Input/></td>
          <td className="desno">95:5=</td>
          <td><Input/></td>
          <td className="desno">185:5=</td>
          <td><Input/></td>
        </tr>
        <tr>

        </tr>
        </tbody>
      </table>
    </div>
);
};