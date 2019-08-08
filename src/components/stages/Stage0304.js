import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0304 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Napiši sve trocifrene brojeve ciframa: 5, 3, 1</Subtitle>

      <table width="280px" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela3x5"
             style="margin-top: 50px;">
        <tbody>
        <tr>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
        </tr>
        <tr>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};