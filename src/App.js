import React, { useState, useEffect } from 'react';
import './style.css';
import Delight from './Delight';

export default function App() {
  const startDelights = ['banana', 'horse', 'cat', 'disappointment', 'hat'];

  const [delights, setDelights] = useState(startDelights);

  useEffect(() => {
    console.log('delights changed...');
    console.log(delights);
  }, [delights]);

  const renderedDelights = delights.map((d) => {
    return <Delight key={d} name={d} onDragComplete={onDragComplete} />;
  });

  function onDragComplete(source, target) {
    console.log(delights);
    console.log(source + ' to ' + target);

    let newDelights = [...delights]; //structuredClone(delights);
    let before = newDelights.indexOf(source) < newDelights.indexOf(target);
    newDelights.splice(newDelights.indexOf(source), 1);
    console.log(newDelights);
    if (before) {
      newDelights.splice(newDelights.indexOf(target) + 1, 0, source);
    } else {
      newDelights.splice(newDelights.indexOf(target), 0, source);
    }
    console.log(newDelights);

    setDelights(newDelights);
  }

  return <div>{renderedDelights}</div>;
}
