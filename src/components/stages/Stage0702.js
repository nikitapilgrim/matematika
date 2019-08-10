import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0702 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka1">
        <tbody>
        <tr>
          <td className="centrirano">420:x =42</td>
          <td className="centrirano">x =<Input answer="10"/></td>
        </tr>
        <tr>
          <td className="centrirano">920:x =92</td>
          <td className="centrirano">x =<Input answer="10"/></td>
        </tr>
        <tr>
          <td className="centrirano">x:100 =4</td>
          <td className="centrirano">x =<Input answer="400"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};