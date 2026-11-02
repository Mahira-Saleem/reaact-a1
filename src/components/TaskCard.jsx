// Props destructuring + Conditional rendering
function TaskCard({ task, onStart, onComplete, onDelete }) {
  const done = task.status === "done";

  return (
    <li className={`card ${done ? "is-done" : ""}`} data-subject={task.subject}>
      <span className="chip">{task.subject}</span>
      <p className="card-title">{task.name}</p>
      <div className="card-actions">
        {task.status === "todo" && (
          <button className="btn btn-ghost" onClick={() => onStart(task.id)}>Start</button>
        )}
        {!done && (
          <button className="btn btn-complete" onClick={() => onComplete(task.id)}>Complete</button>
        )}
        <button className="btn btn-delete" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskCard;
