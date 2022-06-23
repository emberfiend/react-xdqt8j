import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js';

const Delight = ({ name, onDragComplete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.DELIGHT,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        //alert(`You dropped ${item.name} into ${dropResult.name}!`);
        onDragComplete(item.name, dropResult.name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.DELIGHT,
    drop: () => ({ name: name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        border: 'solid 1px black',
        width: '25%',
        margin: '0.5em',
        float: 'left',
      }}
    >
      <div ref={drag} style={{ border: 'solid 1px blue', margin: '1em' }}>
        {name}
      </div>
    </div>
  );
};

export default Delight;
