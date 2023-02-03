import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function EditSnackForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    image: "",
    is_healthy: false,
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          console.log("this is the id: ", {id})
          navigate(`/snacks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };


  useEffect(() => {
    axios
    .get(`${API}/snacks/${id}`)
    .then((response) => {
      setSnack(response.data);
    })
    .catch((c) => {navigate("/error");
    });
}, [id]);


//   axios.get(`${API}/snacks/${id}`)
//   .then((response) => setSnack(response.data))
//   .catch((c) => navigate("/error")
// )
// }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <div className="editSnack">
      <form onSubmit={handleSubmit}  className="editSnackFormBox">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Please enter the snack name (or type)"
          required
        />

        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="text"
          name="fiber"
          value={snack.fiber}
          placeholder="Please enter amount of fiber in grams"
          onChange={handleTextChange}
        />

        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="text"
          name="protein"
          value={snack.protein}
          placeholder="Please enter amount of protein in grams"
          onChange={handleTextChange}
        />

        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="text"
          name="added_sugar"
          value={snack.added_sugar}
          placeholder="Please enter amount of sugar in grams"
          onChange={handleTextChange}
        />

 
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          value={snack.image}
          placeholder='Add url, beginning with: "http://"'
          onChange={handleTextChange}
        />

        <br />
        <input 
        className="editSubmitButton"
         type="submit" />
        <Link to={`/snacks/`}>
        <button className="editCancelButton">Cancel</button>
      </Link>
      </form>
    </div>
  );
}

export default EditSnackForm;