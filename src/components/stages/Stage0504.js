import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0504 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Upiši nedostajuće brojeve:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4x3">
        <tbody>
        <tr>
          <td>a</td>
          <td>137</td>
          <td>256</td>
          <td><Input answer="417"/></td>
          <td>286</td>
        </tr>
        <tr>
          <td>b</td>
          <td>425</td>
          <td><Input answer="744"/></td>
          <td>348</td>
          <td>328</td>
        </tr>
        <tr>
          <td className="topborder">a+b</td>
          <td className="topborder"><Input answer="562"/></td>
          <td className="topborder">1000</td>
          <td className="topborder">765</td>
          <td className="topborder"><Input answer="614"/></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
};