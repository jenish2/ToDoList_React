import { useState } from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [statusForFilter, setStatusForFilter] = useState("all");
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
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
