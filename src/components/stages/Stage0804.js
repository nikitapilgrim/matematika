import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0804 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Podijeli:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="desno">238∙2 : 7 =</td>
          <td className="lijevo" width="60"><Input/></td>
        </tr>
        <tr>
          <td className="desno">354 : (2∙3) =</td>
          <td className="lijevo" width="60"><Input/></td>
        </tr>
        <tr>
          <td className="desno">335 : 5∙9 =</td>
          <td className="lijevo" width="60"><Input/></td>
        </tr>
        <tr>
          <td className="desno">360 : (9∙4) =</td>
          <td className="lijevo" width="60"><Input/></td>
        </tr>
        </tbody>
      </table>
    </div>
);
};