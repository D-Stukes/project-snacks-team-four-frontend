import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <h1>
        <Link className="navButton" to="/">
          Snacks
        </Link>
      </h1>
      <button>
        <Link className="navButton" to="/snacks/new">
          New Snack
        </Link>
      </button>
      <button>
        <Link className="navButton" to="/snacks">
          {" "}
          Snack List{" "}
        </Link>
      </button>
    </nav>
  );
}
