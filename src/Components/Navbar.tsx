import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ToDO List</h1>
        </Link>
        <nav>
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
