import { combineReducers } from "redux";
import {
  ADD_LESSON,
  DOWNLOAD_LESSON,
  DOWNLOAD_COMPLETE,
  UPDATE_AVAIL_FILES
} from "./types";
import * as RNFS from "react-native-fs";

const INITIAL_STATE = {
  jsonFiles: [],
  // for download to device
  availJSONFiles: [],
  // file content to be saved to device (after clicking download)
  downloadedFileString: "",
  downloadingFileName: ""
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
    case DOWNLOAD_LESSON:
      return state;
    case DOWNLOAD_COMPLETE:
      return state;
    case UPDATE_AVAIL_FILES:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  lessons: lessonReducer
});
