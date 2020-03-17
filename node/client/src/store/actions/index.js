import { CREATE_TODO_LIST, CREATE_TODO_ITEM, MARK_DONE_TODO_ITEM,
	MARK_NOTDONE_TODO_ITEM, DELETE_TODO_ITEM, DELETE_TODO_LIST}
   from './action-types';

function typePayload(type, payload) {
		return { type: type, payload: payload };
				
}
export const createTodoList = todoListConfig => {
		typePayload(CREATE_TODO_LIST, todoListConfig)
};
export const createTodoItem = todoItemConfig => {
		typePayload(CREATE_TODO_ITEM, todoItemConfig)
};

export { CREATE_TODO_LIST, CREATE_TODO_ITEM, MARK_DONE_TODO_ITEM,
	MARK_NOTDONE_TODO_ITEM, DELETE_TODO_ITEM, DELETE_TODO_LIST};



