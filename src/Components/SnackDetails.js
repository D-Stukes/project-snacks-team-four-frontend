import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const [snack, setSnack] = useState({});
  let { id } = useParams();

  let navigate = useNavigate();

// Inside SnackDetails function
const deleteSnack = () => {
  axios
    .delete(`${API}/snacks/${id}`)
    .then(
      () => {
        navigate(`/snacks`);
      },
      (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c));
};

  const handleDelete = () => {
    console.log("button clicked");
    deleteSnack()
  };


 useEffect(() => {
  axios
  .get(`${API}/snacks/${id}`)
  .then((response) => {
    console.log(response.data);
    setSnack(response.data);
  })
  .catch((c) => {
    console.warn("catch", c);
  });
  }, [id, API]);

  return (
    <article>
    <h3>
    {snack.name} {snack.is_healthy ? <span>"♥"</span> : "♡"} 
    </h3>
    {/* <h4>{snack.name}</h4> */}
    <h4>{snack.fiber}</h4>
    <h4>{snack.protein}</h4>
    <h4>{snack.added_sugar}</h4>
    <h4>{snack.image}</h4>
    
    <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/snacks`}><button>Back</button></Link>
        </div>
        <div>
          <Link to={`/snacks/${id}/edit`}> <button>Edit</button></Link>
        </div>
        <div>
         <button onClick={handleDelete}>Delete</button>
        </div>
    </div>

  </article>
);
  }
export default SnackDetails;



