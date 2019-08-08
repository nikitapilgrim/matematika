import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0201 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Računaj:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela2x5">
        <tbody>
        <tr>
          <td className="desno">8∙7 + 19=</td>
          <td className="lijevo"><Input/></td>
        </tr>
        <tr>
          <td className="desno">9∙6 - 28=</td>
          <td className="lijevo"><Input/></td>
        </tr>
        <tr>
          <td className="desno">74 – 9∙3=</td>
          <td className="lijevo"><Input/></td>
        </tr>
        <tr>
          <td className="desno">49 + 4∙7=</td>
          <td className="lijevo"><Input/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};