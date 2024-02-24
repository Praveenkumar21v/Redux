import { applyMiddleware, legacy_createStore,compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = compose;
const store = legacy_createStore(
  reducers,
composeEnhancers(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
  );

export default store;
