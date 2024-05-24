import { useTasksContext } from "../Hooks/useTasksContext";

import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { Task } from "../Types/index";

type Props = {
  task: Task;
};

const TaskDetails = ({ task }: Props) => {
  const { dispatch } = useTasksContext();

  const handleClick = async () => {
    const response = await fetch("/api/tasks/" + task.id, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch({ type: "DELETE_TASK", payload: task });
    }
  };

  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>
        <strong>Description : </strong>
        {task.description}
      </p>
      <p>{task?.createdAt && formatDistanceToNow(new Date(task.createdAt))}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default TaskDetails;
