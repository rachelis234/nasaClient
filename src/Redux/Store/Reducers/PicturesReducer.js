import produce from "immer";
import createReducer from "./ReducersUtils";

const initialState = {
  pictures: [],
};


const pictures = {
  setPictures(state, action) {
    state.pictures = action.payload;
  },
};

export default produce(
  (state, action) => createReducer(state, action, pictures),
  initialState
);

