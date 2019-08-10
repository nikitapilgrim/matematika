import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0505 = () => {
  return (
    <div>
      <Title>Sabiranje i oduzimanje</Title>
      <Subtitle>Odgovori:</Subtitle>

      <p>Imaš na štednji 957 KM. Potrošiš 250 KM, a uskoro položiš 197 KM. Koliko poslije toga imaš na štednji?</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><Input answer="904"/></div>
        <div className="width90 displayinline lijevo"><h4>KM</h4></div>
      </div>

    </div>
  );
};