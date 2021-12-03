import { UPDATE_LEFT_OPTION, UPDATE_RIGHT_OPTION } from "./actionTypes";

const initState = {
  array1: [
    "hi",
    "hello",
    "bye",
    "sales",
    "grow",
    "right",
    "left",
    "forward",
    "backward",
    "direction",
  ],
  array2: [
    "DSA",
    "JAVA",
    "Python",
    "c++",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "MERN",
    "MEAN",
  ],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_LEFT_OPTION:
      return {
        ...state,
      };

    case UPDATE_RIGHT_OPTION:
      return {
        ...state,
      };

    default:
      return state;
  }
};
