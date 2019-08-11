import React, {useState, useImperativeHandle, useRef} from 'react';
import {DndProvider, DragSource, DropTarget} from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import HTML5Backend from 'react-dnd-html5-backend';

import {StageWrapper} from '../Layout/StageWrapper';
import {Input} from '../Input';
import {Title} from '../Title';
import {Subtitle} from '../Subtitle';

const Block = React.forwardRef(
  ({text, isDragging, connectDragSource, connectDropTarget}, ref) => {
    const elementRef = useRef(null);
    connectDragSource(elementRef);
    connectDropTarget(elementRef);
    const opacity = isDragging ? 0 : 1;
    useImperativeHandle(ref, () => ({
      getNode: () => elementRef.current,
    }));
    return (
      <div ref={elementRef} style={{opacity}}>
        {text}
      </div>
    );
  },
);
const BlockDrop = DropTarget(
  'card',
  {
    hover(props, monitor, component) {
      if (!component) {
        return null;
      }
      const node = component.getNode();
      if (!node) {
        return null;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = props.index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = node.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      props.moveCard(dragIndex, hoverIndex);
      
      monitor.getItem().index = hoverIndex;
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(
  DragSource(
    'card',
    {
      beginDrag: props => ({
        id: props.id,
        index: props.index,
      }),
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Block),
);


const DropContainer = () => {
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

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(cards, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
      }),
    );
  };

  return (
    <div>
      <Title>Poredaj po veličini</Title>
      <Subtitle>Poredaj po veličini brojeve od manjeg ka većem:</Subtitle>
      <div>
        {cards.map((card, i) => (
          <BlockDrop
            key={card.id}
            index={i}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        ))}
      </div>
    </div>
  );
};


export const Stage1004 = () => {
    return (
      <DndProvider backend={HTML5Backend}>
        <DropContainer/>
      </DndProvider>
    );
  }
;