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

      <table border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass col3_table">
        <tbody>
        <tr>
          <td className="col3_table_cell textCenter">610</td>
          <td className="col3_table_cell"><Input answer="620"/></td>
          <td className="col3_table_cell textCenter">630</td>
        </tr>
        <tr>
          <td className="col3_table_cell"><Input answer="640"/></td>
          <td className="col3_table_cell"><Input answer="650"/></td>
          <td className="col3_table_cell"><Input answer="660"/></td>
        </tr>
        <tr>
          <td className="col3_table_cell"><Input answer="670"/></td>
          <td className="col3_table_cell"><Input answer="680"/></td>
          <td className="col3_table_cell textCenter">690</td>
        </tr>
        <tr>
          <td className="col3_table_cell"><Input answer="700"/></td>
          <td className="col3_table_cell"><Input answer="710"/></td>
          <td className="col3_table_cell"><Input answer="720"/></td>
        </tr>
        <tr>
          <td className="col3_table_cell"><Input answer="730"/></td>
          <td className="col3_table_cell textCenter">740</td>
          <td className="col3_table_cell"><Input answer="750"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};