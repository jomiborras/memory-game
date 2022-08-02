import React from 'react';

const Counter = ({ moves }) => {
  return (
    <div className="counter">
        Moves: { moves }
    </div>
  )
}

export default Counter;