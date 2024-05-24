import { useState } from "react";
import { useLogIn } from "../Hooks/useLogIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, error, isLoading } = useLogIn();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await logIn(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log in</h3>

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
