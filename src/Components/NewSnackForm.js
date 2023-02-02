import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function NewSnackForm() {
  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    image: "",
    is_healthy: false,
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="newSnack">
          <form onSubmit={handleSubmit}  className="newSnackFormBox">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={snack.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Snack Type"
              required
            />

            <label htmlFor="fiber">Fiber:</label>
            <input
              id="fiber"
              type="text"
              name="fiber"
              value={snack.fiber}
              placeholder="educational, inspirational, ..."
              onChange={handleTextChange}
            />

            <label htmlFor="protein">Protein:</label>
            <input
              id="protein"
              type="text"
              name="protein"
              value={snack.protein}
              placeholder="educational, inspirational, ..."
              onChange={handleTextChange}
            />

            <label htmlFor="added_sugar">Added Sugar:</label>
            <input
              id="added_sugar"
              type="text"
              name="added_sugar"
              value={snack.added_sugar}
              placeholder="educational, inspirational, ..."
              onChange={handleTextChange}
            />

            {/* <label htmlFor="is_healthy">Is Healthy:</label>
            <input
              id="is_healthy"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={snack.is_healthy}
            /> */}
            <br />
            <label htmlFor="image">Image URL:</label>
            <input
              id="image"
              type="text"
              pattern="http[s]*://.+"
              // required ? does it tho?
              value={snack.image}
              placeholder="http://"
              onChange={handleTextChange}
            />

            <br />
            <span >
            <input 
            className="newSubmitButton"
            type="submit"  /></span>
            <Link to={`/`}>
            <button className="newCancelButton">Cancel</button>
          </Link>
          </form>
    </div>
  );
}

export default NewSnackForm;
