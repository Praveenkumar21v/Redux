import React from "react";
// import { Table, Button } from "react-bootstrap";
import {Button } from "react-bootstrap";

// import { FaUserEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, fetchTodos } from "../redux/actions";
import { increment,decrement } from "../reduxToolkit/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  // const todoList = useSelector((state) => state.todoReducer.todos);

  return (
    <div>
      <Button variant="warning" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <h1>{counter}</h1>
      <Button variant="danger" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
      <div>
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
      </div>
    </div>
  );
};

export default Counter;
