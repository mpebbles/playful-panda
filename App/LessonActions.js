import { ADD_LESSON } from './types';

export const addLesson = lessonIndex => (
  {
    type: ADD_LESSON,
    payload: lessonIndex,
  }
);
