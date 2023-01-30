import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";
//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnacksAll() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="SnacksAll">
            <p>
              {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} 
              />;
            })}
            </p>
    </div>
  );
}

export default SnacksAll;
