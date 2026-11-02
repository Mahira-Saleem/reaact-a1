import { useReducer } from "react";
import { tasksReducer, initialTasks } from "../tasksReducer";

function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const addTask = (name, subject) => dispatch({ type: "ADD", name, subject });
  const startTask = (id) => dispatch({ type: "START", id });
  const completeTask = (id) => dispatch({ type: "COMPLETE", id });
  const deleteTask = (id) => dispatch({ type: "DELETE", id });

  return { tasks, addTask, startTask, completeTask, deleteTask };
}

export default useTasks;
