import { combineReducers } from "redux";
import { ADD_LESSON } from './types';

const INITIAL_STATE = {
  jsonFiles: ["1", "2", "3", "4"]
};

const lessonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LESSON:
      const { jsonFiles } = state;

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      //const addedFriend = possible.splice(action.payload, 1);
      jsonFiles.push(action.payload);

      // Finally, update our redux state
      const newState = { jsonFiles };
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  lessons: lessonReducer
});
