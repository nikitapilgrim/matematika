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
          <td><Input answer="620"/></td>
          <td>630</td>
        </tr>
        <tr>
          <td><Input answer="640"/></td>
          <td><Input answer="650"/></td>
          <td><Input answer="660"/></td>
        </tr>
        <tr>
          <td><Input answer="670"/></td>
          <td><Input answer="680"/></td>
          <td>690</td>
        </tr>
        <tr>
          <td><Input answer="700"/></td>
          <td><Input answer="710"/></td>
          <td><Input answer="720"/></td>
        </tr>
        <tr>
          <td><Input answer="730"/></td>
          <td>740</td>
          <td><Input answer="750"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};