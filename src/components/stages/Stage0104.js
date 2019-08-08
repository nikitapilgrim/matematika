import React from 'react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

export const Stage0104 = () => {
  return (
    <div>
      <Title>Ponavljanje gradiva</Title>
      <Subtitle>Upiši odgovor:</Subtitle>
      <p>U teretni voz je utovareno 9 vagona povrća. U svakom vagonu je 7 sanduka povrća. Na prvoj stanici je iz tri
        vagona istovareno po 4 sanduka povrća. Na sljedećoj stanici je istovareno iz 5 vagona po 6 sanduka povrća, a
        ostatak povrća je istovaren na trećoj stanici.</p>
      <p>Koliko je sanduka istovareno na trećoj stanici?</p>
      <div className="centrirano fullwidth">
        <div className="width90 displayinline desno"><Input /></div>
        <div className="width90 displayinline lijevo"><h4>dag</h4></div>
      </div>
    </div>
  );
};