import SnackDetails from "../Components/SnackDetails";
import { useState, useEffect } from "react";
import axios from "axios";

//import { Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Show() {
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
    <div className="show">
      {/* <h2>Show</h2> */}
      <SnackDetails snacks={snacks} />
    </div>
  );
}

export default Show;
