import React, { useState } from 'react';

const Dev = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="h1">Dev</h1>
      <p className="body--1">The count is {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Dev;
