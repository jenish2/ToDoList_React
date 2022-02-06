import React from "react";

const Form = ({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatusForFilter,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    //To preventing from the reload page when click on button
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100000 },
    ]);
    setInputText("");
  };

  const statusForFilterHandler = (e) => {
    setStatusForFilter(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        type="text"
        onChange={inputTextHandler}
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fa fa-plus"></i>
      </button>
      <div className="select">
        <select
          name="todo"
          className="filter-todo"
          onClick={statusForFilterHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
