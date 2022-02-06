import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
