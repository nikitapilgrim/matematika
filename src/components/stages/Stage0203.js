import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0203 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>Imas bure od 42l i posudu od 6l. Koliko ćeš najmanje puta sipati vodu tom posudom da napuniš to bure?</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><Input /></div>
        <div className="width90 displayinline lijevo"><h4>puta</h4></div>
      </div>
    </div>
  );
};