import { CREATE_TODO_LIST, DELETE_TODO_LIST} from "../actions/index";

const todoListsReducer = function(state = [], action) {
    const { payload } = action;

    switch (action.type) {
      case CREATE_TODO_LIST: {
        return [...state, payload];
      }
      case DELETE_TODO_LIST: {
        return state.filter(id  => id !== payload);
      }
      default:
        return { ...state };
    }
};

export default todoLists;