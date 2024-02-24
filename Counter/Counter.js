import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <Button variant="warning" onClick={() => dispatch(increment(10))}>
        Increment
      </Button>
      <h1>{counter}</h1>
      <Button variant="danger" onClick={() => dispatch(decrement(5))}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
