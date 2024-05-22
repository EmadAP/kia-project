import { createContext, useReducer } from "react";
import type { UserType, AuthAction } from "../Types/index";

export const AuthContext = createContext<{
  user: Array<UserType>;
  dispatch: React.Dispatch<AuthAction>;
}>({ user: [], dispatch: () => {} });

export const authReducer = (state: Array<UserType>, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
