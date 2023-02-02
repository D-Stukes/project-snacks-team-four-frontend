import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <h1  >
        <Link to="/" className="navButtonHdg">
         Snacks Log{" "}
        </Link>
      </h1>
      
      <button className="outerNavButton1">
      <Link className="navButton" to="/snacks">
          Snack List 
        </Link>
      </button>

      <button className="outerNavButton2">
      <Link className="navButton" to="/snacks/new">
          New Snack
        </Link>
    
      </button>
    </nav>
  );
}
