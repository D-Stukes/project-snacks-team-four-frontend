import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function EditSnackForm() {
  let id = useParams();
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
      .put(`${API}/snacks/${id.index}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id.index}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_favorite: !snack.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/snacks/${id.index}`).then(
      (response) => setSnack(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id.index, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id.index);
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

        <label htmlFor="added_sugar">added_sugar:</label>
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
          // checked={snack.is_healthy}
        /> */}
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          // required
          value={snack.image}
          placeholder="http://"
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
      <Link to={`/snacks/${id.index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditSnackForm;
