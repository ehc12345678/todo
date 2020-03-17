import { CREATE_TODO_LIST, CREATE_TODO_ITEM, MARK_DONE_TODO_ITEM,
	 MARK_NOTDONE_TODO_ITEM, DELETE_TODO_ITEM, DELETE_TODO_LIST} from "../actions/index";

const defaultState = {
    todoLists: [],
    currentTodoList: null,
    loading: true,
    loaded: false,
    error: false
};

const rootReducer = function(state = defaultState, action) {
    const { payload } = action;

    switch (action.type) {
    case CREATE_TODO_LIST: {
	return { ...state, todoLists: [...state.todoLists, payload] };
    }
    case CREATE_TODO_ITEM:
    case MARK_DONE_TODO_ITEM:
    case MARK_NOTDONE_TODO_ITEM:
    case DELETE_TODO_ITEM:
    case DELETE_TODO_LIST:
    default:
	return { ...state };
    }
};

export default rootReducer;

