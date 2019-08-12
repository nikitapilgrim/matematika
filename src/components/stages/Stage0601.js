import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0601 = () => {
  return (
    <div>
      <Title>Množenje i dijeljenje</Title>
      <Subtitle>Računaj:</Subtitle>

      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela4redka">
        <tbody>
        <tr>
          <td className="centrirano">68∙10 =</td>
          <td className="lijevo"><Input answer="680"/></td>
          <td className="centrirano">7∙100 =</td>
          <td className="lijevo"><Input answer="700"/></td>
        </tr>
        <tr>
          <td className="centrirano">82∙10 =</td>
          <td className="lijevo"><Input answer="560"/></td>
          <td className="centrirano">9∙100 =</td>
          <td className="lijevo"><Input answer="77"/></td>
        </tr>
        <tr>
          <td className="centrirano">10∙25 =</td>
          <td className="lijevo"><Input answer="250"/></td>
          <td className="centrirano">100∙4 =</td>
          <td className="lijevo"><Input answer="400"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};