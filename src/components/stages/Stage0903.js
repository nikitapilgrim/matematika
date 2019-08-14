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
      <table className="col2_margin_4">
        <tbody>
        <tr>
          <td class="desno fontsize20">482 : 5 + 253 : 5 =</td>
          <td class="lijevo fontsize20"><Input answer="147"/></td>
        </tr>
        <tr>
          <td class="desno fontsize20">158∙2 + 242∙2 =</td>
          <td class="lijevo fontsize20"><Input answer="800"/></td>
        </tr>
        <tr>
          <td class="desno fontsize20">567 : 6 – 333 : 6 =</td>
          <td class="lijevo fontsize20"><Input answer="39"/></td>
        </tr>
        <tr>
          <td class="desno fontsize20">434∙7 - 334∙7 =</td>
          <td class="lijevo fontsize20"><Input answer="700"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};