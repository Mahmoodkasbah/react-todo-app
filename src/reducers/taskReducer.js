import { v4 as uuidv4 } from "uuid";

export default function tasksReducer(currentTasks, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: uuidv4(),
        title: action.title,
        details: action.details,
        completed: false,
      };
      return [...currentTasks, newTask];
    }

    case "TOGGLE_COMPLETE":
      return currentTasks.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task,
      );

    case "MODIFY_TASK":
      return currentTasks.map((task) =>
        task.id === action.task.id ? { ...task, ...action.task } : task,
      );

    case "DELETE_TASK":
      return currentTasks.filter((task) => task.id !== action.id);
    default:
      return currentTasks;
  }
}
