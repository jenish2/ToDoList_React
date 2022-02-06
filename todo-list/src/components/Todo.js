import React from "react";

const Todo = ({ todos, todo, setTodos }) => {
  //DeleteButton Event
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
    console.log(todos);
  };
  return (
    <div className="todo">
      <div className="todo-item">
        <div className={`task ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </div>
        <button className="complete-btn" onClick={completeHandler}>
          <i className="fa fa-check"></i>
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
