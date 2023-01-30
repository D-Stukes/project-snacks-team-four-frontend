import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <h1>
        <Link to="/snacks">Snacks</Link>
      </h1>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
      <button>
        <Link to="/snacks"> Snack List </Link>
      </button>
    </nav>
  );
}
