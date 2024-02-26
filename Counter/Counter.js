import React from "react";
import { Table, Button } from "react-bootstrap";
// import {Button } from "react-bootstrap";

import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, fetchTodos } from "../redux/actions";
import { increment, decrement, fetchTodos } from "../reduxToolkit/counterSlice";
import useRandomColor from "../CustomHooks/useRandomColor";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  // const todoList = useSelector((state) => state.todoReducer.todos);
  const todoList = useSelector((state) => state.counterReducer.todos);
  const error = useSelector((state) => state.counterReducer.error);
  const loading = useSelector((state) => state.counterReducer.loading);
  const { color, handleColorChange } = useRandomColor();

  return (
    <div style={{ background: `#${color}` }}>
      <Button onClick={handleColorChange}>Color Change</Button>
      <Button variant="warning" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <h1>{counter}</h1>
      <Button variant="danger" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
      <br />
      <br />
      {/* <div> */}
      {/* <Button variant="success" onClick={() => dispatch(fetchTodos())}>
          Fetch Todos
        </Button> */}
      {/* <Table striped bordered hover variant="dark">
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th>completed?</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {todoList &&
              todoList.map(({ id, todo, isCompleted }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{todo}</td>
                  <td>{isCompleted ? "yes" : "no"}</td>
                  <td>
                    <FaUserEdit size={30} />
                  </td>
                  <td>
                    <MdDelete size={30} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table> */}
      {/* </div> */}
      <Button variant="success" onClick={() => dispatch(fetchTodos())}>
        Fetch Todos
      </Button>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>error: {error}</h1>}
      {!error && (
        <Table striped bordered hover variant="dark">
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th>completed?</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {todoList &&
              todoList.map(({ id, todo, isCompleted }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{todo}</td>
                  <td>{isCompleted ? "yes" : "no"}</td>
                  <td>
                    <FaUserEdit size={30} />
                  </td>
                  <td>
                    <MdDelete size={30} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Counter;
