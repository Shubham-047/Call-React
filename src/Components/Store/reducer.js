import { UPDATE_LEFT_OPTION, UPDATE_RIGHT_OPTION } from "./actionTypes"

const initState = {
     array1 : ["hi", "hello", "new", "Shukriya", "Whats up"],
 array2 : ["s", "h", "r", "p", "t"]
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case UPDATE_LEFT_OPTION:
            return {
                ...state,
               
            }
        
          case UPDATE_RIGHT_OPTION:
            return {
                ...state,
            }
        
        default:
            return state;
    }
}