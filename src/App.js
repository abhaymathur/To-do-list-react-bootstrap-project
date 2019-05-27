import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
function App() {
  return (
    <div className="App">
      {/* <TodoInput /> */}
      <TodoList />
    </div>
  );
}

export default App;
