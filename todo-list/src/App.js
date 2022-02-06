import { useEffect, useState } from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [statusForFilter, setStatusForFilter] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  //useEffect
  useEffect(() => {
    const filterHandler = () => {
      switch (statusForFilter) {
        case "completed":
          setFilterTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilterTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [todos, statusForFilter]);

  return (
    <div className="App">
      <header>ToDo List {inputText}</header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatusForFilter={setStatusForFilter}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
