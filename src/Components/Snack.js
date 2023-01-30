import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td>
        {snack.is_healthy ? (
          <span>"♥"</span>
        ) : (
          <span>"♡"</span>
        )}
      </td>
      <td>
        <a href={snack.image} target="_blank" rel="noreferrer" >
          {snack.name}
        </a>
      </td>
      <td>
        <Link to={`/snacks/${snack.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Snack;
