import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0903 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>
      <table>
        <tbody>
        <tr>
          <td class="desno">482 : 5 + 253 : 5 =</td>
          <td class="lijevo"><Input/></td>
        </tr>
        <tr>
          <td class="desno">158∙2 + 242∙2 =</td>
          <td class="lijevo"><Input/></td>
        </tr>
        <tr>
          <td class="desno">567 : 6 – 333 : 6 =</td>
          <td class="lijevo"><Input/></td>
        </tr>
        <tr>
          <td class="desno">434∙7 - 334∙7 =</td>
          <td class="lijevo"><Input/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};