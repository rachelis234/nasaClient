import produce from "immer";
import createReducer from "./ReducersUtils";

const initialState = {
  user: {
    user:{},
    token:""
  }
};

const users = {
  setUser(state, action) {
    state.user = action.payload;
  },
};

export default produce(
  (state, action) => createReducer(state, action, users),
  initialState
);
