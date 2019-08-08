import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0704 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj koristeći osobine množenja i dijeljenja:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka1">
        <tbody>
        <tr>
          <td className="desno">54∙7=</td>
          <td><Input/></td>
          <td className="desno">75:5=</td>
          <td><Input/></td>
        </tr>
        <tr>

        </tr>
        <tr>
          <td className="desno">36∙6=</td>
          <td><Input/></td>
          <td className="desno">96:8=</td>
          <td><Input/></td>
        </tr>
        <tr>

        </tr>
        <tr>
          <td className="desno">25∙8=</td>
          <td><Input/></td>
          <td className="desno">51:3=</td>
          <td><Input/></td>
        </tr>
        <tr>

        </tr>
        </tbody>
      </table>

    </div>
  );
};