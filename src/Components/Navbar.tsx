import { Link } from "react-router-dom";
import { useLogOut } from "../Hooks/useLogOut";

const Navbar = () => {
  const { logOut } = useLogOut();

  const handleClick = () => {
    logOut();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ToDO List</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/logIn">Login</Link>
            <Link to="/signUp">SignUp</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
