import { createContext, useReducer } from "react";

export const TasksContext = createContext();

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        tasks: action.payload,
      };
    case "CREATE_TASK":
      const tasks = [action.payload];
      if (state?.tasks.length) {
        tasks.push(...state.tasks);
      }
      return {
        tasks,
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((t) => t._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    state: [],
  });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
