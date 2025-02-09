import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import SnacksAll from "./SnacksAll";

console.log(SnacksAll);
const API = process.env.REACT_APP_API_URL;

function SnackDetails({ snacks }) {
  const [snack, setSnack] = useState({});
  let id = useParams();

  let navigate = useNavigate();

  // Inside SnackDetails function
  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id.index}`)
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
      .get(`${API}/snacks/${id.index}`)
      // added dot index to see the id value
      .then((response) => {
        setSnack(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);
  console.log(snacks);
  console.log(id.index);

  return (
   <article className="SnackDetail">
      <div>
        <h4>{snack.name}</h4>
        <img className="foodImg" src={snack.image} alt="image not found" />
        <h3>{snack.is_healthy ? <span>❤️</span> : <span>♡</span>}</h3>
        {/* <h 4>{snack.name}</h> */}
        <span className="snackSpec">Fiber: {snack.fiber}  | {"    "} </span>
        <span className="snackSpec">Protein: {snack.protein} {"    " }  | {"    "} </span>
        <span className="snackSpec">Added Sugar: {snack.added_sugar}</span><br/><br/><br/><br/>

        <div className="showNavigation">
          <div>
            {/* {" "} */}
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>

                   <Link to={`/snacks/${id.index}/edit`}>
              {" "}
              <button>Edit</button>
            </Link>   
             <button onClick={handleDelete}>Delete</button>
          </div>
          <div>
 
          </div>
          <div>
            
          </div>
        </div>
      </div>

      <div>
        {snacks.map((snack) => {
          return (
            <tr>
              <td>{snack.is_healthy ? <span className="healthyHeart">❤️</span> : <span className="unhealthyHeart">♡</span>}</td>
              <img classname="snackImageSideLink"style={{ height: 25, width: 25 }} src={snack.image}></img>
              <td>
                <Link to={`/snacks/${snack.id}`}  classname="snackNameSideLink" >{snack.name} </Link>
                {/* why is clicking on the name of the snack taking me to just the image? */}
              </td>
              <td>
                <Link to={`/snacks/${snack.id}/edit`}>✏️</Link>
              </td>
            </tr>
          );
        })}
      </div>
    </article>
  );
}
export default SnackDetails;
