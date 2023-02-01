import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack"; //this line needed?

//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnacksAll() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        console.log(response.data);
        setSnacks(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <p className="snackCards">
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack} />;
        })}
      </p>
    </div>
  );
}

export default SnacksAll;
