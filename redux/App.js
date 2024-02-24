import React from "react";
import Counter from "./Counter/Counter";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;