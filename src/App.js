import "./App.css";
import TaskProvider from "./context/TaskProvider";
import Header from "./components/layout/Header";
import AddTaskForm from "./components/tasks/AddTaskForm";
import FilterButtons from "./components/tasks/FilterButtons";
import TaskList from "./components/tasks/TaskList";

export default function App() {
  return (
    <TaskProvider>
      <div className="App" dir="rtl">
        <Header />
        <AddTaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
