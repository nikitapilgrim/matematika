import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0102 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Riješi jednačine</Subtitle>
      <table width="100%" border="0" cellSpacing="2" cellPadding="0" align="center" className="fontclass tabela1x5">
        <tbody>
        <tr>
          <td className="centrirano">38+x=96</td>
          <td className="backgroundbeige">x=<Input answer="58"/></td>
        </tr>
        <tr>
          <td className="centrirano">x–27=68</td>
          <td className="backgroundbeige">x=<Input answer="95"/></td>
        </tr>
        <tr>
          <td className="centrirano">82–n=56</td>
          <td className="backgroundbeige">n=<Input answer="26"/></td>
        </tr>
        <tr>
          <td className="centrirano">n+29=64</td>
          <td className="backgroundbeige">n=<Input answer="35"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};