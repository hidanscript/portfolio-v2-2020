import React, { useEffect, useState } from "react";
import "./css/GeneralStyles.css";

//Components
import TodoGenerator from "./components/TodoGenerator";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const refreshTasks = () => {
    Axios.get("/tasks")
      .then((res) => res.data)
      .then((tasks) => {
        setTasks(tasks);
      });
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <div className="App-todo">
      <Header />
      <TodoGenerator refreshCallback={refreshTasks} />
      <TodoList tasks={tasks} refreshCallback={refreshTasks} />
    </div>
  );
}

export default App;
