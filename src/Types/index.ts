export type Task = {
  id: number;
  title: string;
  description: string;
  createdAt?: Date;
};

export type TaskAction = {
  type: "SET_TASK" | "CREATE_TASK" | "DELETE_TASK";
  payload: Task;
};

export type UserType = {
  password: string;
  email: string;
};

export type AuthAction = {
  payload: UserType | null;
  type: "LOGIN" | "LOGOUT";
};
