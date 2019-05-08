import { combineReducers } from "redux";

const INITIAL_STATE = {
  current: [],
  possible: []
};

const lessonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  lessons: lessonReducer
});
