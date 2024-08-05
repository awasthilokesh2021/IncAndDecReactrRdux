import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../Store/counterSlice'; // Adjust the import path if needed

const Cart = () => {
  const item = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return ( 
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>Count: {item}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Cart;
