import { ADD_LESSON } from './types';

export const addLesson = lessonName => (
  {
    type: ADD_LESSON,
    payload: lessonName,
  }
);
