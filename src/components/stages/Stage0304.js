import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0304 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Napiši sve trocifrene brojeve ciframa:</Subtitle>
      <Subtitle>5, 3, 1</Subtitle>

      <table border="0" cellSpacing="0" cellPadding="3" align="center" className="col3_table">
        <tbody>
        <tr>
          <td className="col3_table_cell"><Input answer="531"/></td>
          <td className="col3_table_cell"><Input answer="513"/></td>
          <td className="col3_table_cell"><Input answer="351"/></td>
        </tr>
        <tr>
          <td className="col3_table_cell"><Input answer="315"/></td>
          <td className="col3_table_cell"><Input answer="153"/></td>
          <td className="col3_table_cell"><Input answer="135"/></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};