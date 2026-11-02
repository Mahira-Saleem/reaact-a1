import Column from "./Column";
import TaskCard from "./TaskCard";

const COLUMNS = [
  { key: "todo", title: "To do" },
  { key: "progress", title: "In progress" },
  { key: "done", title: "Completed" },
];

function Board({ tasks, onStart, onComplete, onDelete }) {
  return (
    <div className="board">
      {COLUMNS.map((col) => {
        const columnTasks = tasks.filter((t) => t.status === col.key);
        return (
          <Column key={col.key} title={col.title} count={columnTasks.length}>
            {/* Rendering lists: .map() + key prop */}
            {columnTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onStart={onStart}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            ))}
          </Column>
        );
      })}
    </div>
  );
}

export default Board;
