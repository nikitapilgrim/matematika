import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0501 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4x3"
             style="margin-top: 40px;">
        <tbody>
        <tr>
          <td>487</td>
          <td>104</td>
          <td>856</td>
          <td>623</td>
        </tr>
        <tr>
          <td>+245</td>
          <td>+396</td>
          <td>-374</td>
          <td>-356</td>
        </tr>
        <tr>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
        </tr>
        </tbody>
      </table>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4x3"
             style="margin-top: 20px;">
        <tbody>
        <tr>
          <td>396</td>
          <td>237</td>
          <td>483</td>
          <td>522</td>
        </tr>
        <tr>
          <td>+285</td>
          <td>+465</td>
          <td>-375</td>
          <td>-393</td>
        </tr>
        <tr>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
          <td><Input /></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};