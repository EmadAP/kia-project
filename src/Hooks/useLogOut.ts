import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT", payload: null });
  };

  return { logOut };
};
