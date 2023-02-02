import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import SnacksAll from "./SnacksAll";

console.log(SnacksAll);
const API = process.env.REACT_APP_API_URL;

function SnackDetails({ snacks }) {
  const [snack, setSnack] = useState({});
  let { id } = useParams();

  let navigate = useNavigate();

  // Inside SnackDetails function
  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error) //normally for 404 errors when item is not found
      )
      .catch((c) => console.warn("catch", c)); //for 500 error for server erros
  };

  // const handleDelete = () => {
  //   console.log("button clicked");
  //   deleteSnack()
  // };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);
  // console.log(snacks);
  // console.log(id);

  return (
    <article className="SnackDetails">
      <div className="snackShowBox">
        <h4 className="snackName snackShowBoxHdg">{snack.name}</h4>
        <img className="foodImg" src={snack.image} alt="image not found" />
        <h3>{snack.is_healthy ? <span>❤️</span> : <span>♡</span>}</h3>
 
        <span className="snackSpec" >Fiber: {snack.fiber}  | {"    "}</span>
        <span className="snackSpec" >Protein: {snack.protein}  | {"    "}</span>
        <span className="snackSpec" >Added Sugar: {snack.added_sugar}</span><br/>

        <div className="showNavigation">
        
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
         
         
            <Link to={`/snacks/${id}/edit`}>
              {" "}
              <button>Edit</button>
            </Link>
      
            <button onClick={handleDelete}>Delete</button>
        
        </div>
      </div>

      <div className="snackLinkBox">
       <h4 className="snackLinkBoxHdg">View Other Snacks</h4>
        {snacks.map((snack) => {
          return (
            <tr className="snackLinkData">
              <td></td>
              <td></td>
              <td></td>
              <td>{snack.is_healthy ? <span>❤️</span> : <span className="heart2">♡</span>}</td>
              <img style={{ height: 25, width: 25 }} src={snack.image}></img>
              <td>
                {/* <Link to={`/snacks/${snack.id}`}>{snack.name}</Link> */}
                <Link to={`/snacks/${id}`}>{snack.name}</Link>
              </td>
              <td>
                {/* <Link to={`/snacks/${snack.id}/edit`}>✏️</Link> */}
                <Link to={`/snacks/${id}/edit`}>✏️</Link>
              </td>
            </tr>
          );
        })}
      </div>
    </article>
  );
}
export default SnackDetails;