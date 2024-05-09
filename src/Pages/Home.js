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

      if (response.ok) {
        dispatch({ type: "SET_TASK", payload: json });
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="tasks">
        {tasks?.length &&
          tasks.map((task) => <TaskDetails key={task._id} task={task} />)}
      </div>
      <TaskForm key={tasks._id} />
    </div>
  );
};

export default Home;
