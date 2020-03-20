import { CREATE_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM } from "../actionTypes";

const defaultState = {
  allIds = [],
  byIds = {}
}

const todoList = function(state = [], action) {
  switch (action.type) {
    case CREATE_TODO_ITEM: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case DELETE_TODO_LIST: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: allIds.filter(id => id !== payload.id),
        byIds: byIds.filter(id => id !== payload.id)
      }
    };
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}

export default todoList;