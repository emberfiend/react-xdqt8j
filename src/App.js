import React, { useState } from 'react';
import './style.css';
import Delight from './Delight';

export default function App() {
  const startDelights = ['banana', 'horse', 'cat', 'disappointment', 'hat'];

  const [delights, setDelights] = useState(startDelights);

  const renderedDelights = delights.map((d) => {
    return <Delight name={d} onDragComplete={onDragComplete} />;
  });

  function onDragComplete(source, target) {
    console.log(delights);
    console.log(source + ' to ' + target);

    let newDelights = structuredClone(delights);
    newDelights.splice(newDelights.indexOf(source), 1);
    newDelights.splice(newDelights.indexOf(target), 0, source);

    console.log(newDelights);

    setDelights(newDelights);
  }

  return <div>{renderedDelights}</div>;
}
