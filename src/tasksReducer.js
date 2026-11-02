// useReducer: ek jagah par saari state-change logic.
// reducer(currentState, action) -> newState

export const initialTasks = [];

export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...tasks,
        { id: Date.now(), name: action.name, subject: action.subject, status: "todo" },
      ];
    case "START":
      return tasks.map((t) => (t.id === action.id ? { ...t, status: "progress" } : t));
    case "COMPLETE":
      return tasks.map((t) => (t.id === action.id ? { ...t, status: "done" } : t));
    case "DELETE":
      return tasks.filter((t) => t.id !== action.id);
    default:
      return tasks;
  }
}
