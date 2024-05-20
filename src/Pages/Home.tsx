import { useEffect } from "react";
import TaskDetails from "../Components/TaskDetails";
import TaskForm from "../Components/TaskForm";
import { useTasksContext } from "../Hooks/useTasksContext";
import "../server";

const Home = () => {
  const { tasks, dispatch } = useTasksContext();
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      console.debug({ json });

      if (response.ok) {
        dispatch({ type: "SET_TASK", payload: json.tasks });
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="tasks">
        {tasks?.length &&
          tasks.map((task) => {
            console.debug("Looping over tasks", task.id, { task });
            return <TaskDetails key={task.id} task={task} />;
          })}
      </div>
      <TaskForm />
    </div>
  );
};

export default Home;
