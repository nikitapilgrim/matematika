import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage1004 = () => {
  return (
    <div>
      <Title>Poredaj po veličini</Title>
      <Subtitle>Poredaj po veličini brojeve od manjeg ka većem:</Subtitle>
      <div className="drag_drop">4321</div>
      <div className="drag_drop">5876</div>
      <div className="drag_drop">1995</div>
      <div className="drag_drop">2863</div>
      <div className="drag_drop">4289</div>
      <div className="drag_drop">2001</div>
      <div className="drag_drop">3805</div>
      <div className="drag_drop">2121</div>
      <div className="drag_drop">5991</div>
    </div>
  );
};