import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./Reducers/UserReducer";
import picturesReducer from "./Reducers/PicturesReducer";
// import { middleware } from "./Middlewares/crud";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ userReducer, picturesReducer });

const store = createStore(
  reducer,
  //   composeWithDevTools(applyMiddleware(middleware))
    composeWithDevTools()
);

window.store = store;
export default store;
