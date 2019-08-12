import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import useStoreon from 'storeon/react';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

const SortContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .drag_drop {
    margin-left: 5px;
  }
`;

const SortableItem = SortableElement(({value}) => <div className="drag_drop">{value}</div>);

const SortableList = SortableContainer(({items}) => {
  return (
    <SortContainer>
      {items.map((item, index) => (
        <SortableItem key={`item-${item.id}`} index={index} value={item.text}/>
      ))}
    </SortContainer>
  );
});

const DropContainer = () => {
  const {dispatch, stage} = useStoreon('stage');
  const [cards, setCards] = useState([
    {
      id: 1,
      text: '4321',
    },
    {
      id: 2,
      text: '5876',
    },
    {
      id: 3,
      text: '1995',
    },
    {
      id: 4,
      text: '2863',
    },
    {
      id: 5,
      text: '4289',
    },
    {
      id: 6,
      text: '2001',
    },
    {
      id: 7,
      text: '3805',
    },
    {
      id: 8,
      text: '2121',
    },
    {
      id: 9,
      text: '5991',
    },
  ]);
  const [result, setResult] = useState();

  useEffect(() => {
    setResult([...cards].sort((a, b) => Number(a.text) - Number(b.text)))
  }, []);
  useEffect(() => {
    if (JSON.stringify(cards) === JSON.stringify(result)) dispatch('next')
  }, [cards]);

  const onSortEnd = ({oldIndex, newIndex}) => {
    setCards(arrayMove(cards, oldIndex, newIndex));
  };

  return (
    <div>
      <Title>Poredaj po veličini</Title>
      <Subtitle>Poredaj po veličini brojeve od manjeg ka većem:</Subtitle>
      <div>
        <SortableList axis="xy" items={cards} onSortEnd={onSortEnd}/>
      </div>
    </div>
  );
};


export const Stage1004 = () => {
    return (
      <DropContainer/>
    );
  }
;