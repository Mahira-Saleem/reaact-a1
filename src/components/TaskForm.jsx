import { useRef, useState } from "react";

const SUBJECTS = ["Mathematics", "Science", "English", "Sport"];

// Props destructuring: ({ onAddTask }) -- Child to Parent communication
function TaskForm({ onAddTask }) {
  const inputRef = useRef(null);            // useRef: input element ko direct access
  const [subject, setSubject] = useState(SUBJECTS[0]); // useState: select ki value

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value.trim();
    if (name === "") return;                // empty task add nahi hoga
    onAddTask(name, subject);               // child -> parent
    inputRef.current.value = "";
    inputRef.current.focus();               // cursor wapis input mein
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="What do you need to finish?" aria-label="Task name" />
      <select value={subject} onChange={(e) => setSubject(e.target.value)} aria-label="Subject">
        {SUBJECTS.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
