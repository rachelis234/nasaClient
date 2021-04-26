import produce from "immer";
import createReducer from "./ReducersUtils";
// import { keyBy } from "lodash";

const initialState = {
  pictures: [],
  // pictureOfDay:{}
};


const pictures = {
  setPictures(state, action) {
    state.pictures = action.payload;
  },
  // setPictureOfDay(state, action) {debugger
  //   state.pictureOfDay = action.payload;
  // }
};

export default produce(
  (state, action) => createReducer(state, action, pictures),
  initialState
);

