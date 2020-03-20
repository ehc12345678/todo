import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
//import { getTodosByVisibilityFilter } from "../redux/selectors";
//import { VISIBILITY_FILTERS } from "../constants";

const TodoList = ({ todoList }) => (
  <div className="todo-list-title">{todoList.name}</div>
  <ul className="todo-list">
    {todoList.items && todoList.items.length
      ? todoList.items.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} list={todoList.id}/>;
        })
      : "No todos, yay!"}
  </ul>
);

function mapStateToProps(state) {
  const { items, name, id } = state
  return { items: items, name: name, id: id }
}

export default connect(mapStateToProps)(TodoList)