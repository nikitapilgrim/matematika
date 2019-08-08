import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0301 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Upiši nedostajuće desetice</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela3x5">
        <tbody>
        <tr>
          <td>610</td>
          <td><Input /></td>
          <td>630</td>
        </tr>
        <tr>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
        </tr>
        <tr>
          <td><Input /></td>
          <td><Input /></td>
          <td>690</td>
        </tr>
        <tr>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
        </tr>
        <tr>
          <td><Input /></td>
          <td>740</td>
          <td><Input /></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};