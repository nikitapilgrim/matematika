import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0707 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj brzo i tačno:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">(42+63–21):7=</td>
          <td className="centrirano"><Input/></td>
        </tr>
        <tr>
          <td className="desno">(81–36+72):9=</td>
          <td className="centrirano"><Input/></td>
        </tr>
        <tr>
          <td className="desno">(56+64–32):8=</td>
          <td className="centrirano"><Input/></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
};