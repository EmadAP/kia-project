import { PropsWithChildren, createContext, useReducer } from "react";
import type { Task, TaskAction } from "../Types";

export const TasksContext = createContext<{
  tasks: Array<Task>;
  dispatch: React.Dispatch<TaskAction>;
}>({
  tasks: [],
  dispatch: () => {},
});

export const tasksReducer = (state: Array<Task>, action: TaskAction) => {
  switch (action.type) {
    case "SET_TASK":
      console.debug({ action });
      return action.payload as unknown as Array<Task>;
    case "CREATE_TASK":
      const tasks = [action.payload];
      if (state?.length) {
        tasks.push(...state);
      }
      return tasks;

    case "DELETE_TASK":
      return state.filter((t) => t.id !== action.payload.id);
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks: state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
