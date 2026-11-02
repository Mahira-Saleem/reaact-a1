import useTasks from "./hooks/useTasks";
import TaskForm from "./components/TaskForm";
import Board from "./components/Board";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  // State parent (App) mein hai, props ke through children ko jati hai
  const { tasks, addTask, startTask, completeTask, deleteTask } = useTasks();
  const doneCount = tasks.filter((t) => t.status === "done").length;

  return (
    <div className="layout">
      <main className="main">
        <header className="top">
          <h1>Student Task Manager</h1>
          <p className="summary">{doneCount} of {tasks.length} tasks completed</p>
        </header>

        <TaskForm onAddTask={addTask} />
        <Board
          tasks={tasks}
          onStart={startTask}
          onComplete={completeTask}
          onDelete={deleteTask}
        />
      </main>

      <aside className="side">
        <h2>Classmates</h2>
        <UserList />
      </aside>
    </div>
  );
}

export default App;
