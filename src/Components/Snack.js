import { Link } from "react-router-dom";

function Snack({ snack }) {
  console.log(snack);
  return (
    // <tr>
    //   <td>{snack.is_healthy ? <span>"♥"</span> : <span>"♡"</span>}</td>
    //   <td>
    // <Link className="snack" to={`/snacks/${snack.id}`}>
    //   {snack.name}
    // </Link>
    //     {/* why is clicking on the name of the snack taking me to just the image? */}
    //   </td>
    //   <td>
    //     <Link to={`/snacks/${snack.id}/edit`}>✏️</Link>
    //   </td>
    // </tr>
    <section>
      <ul>
        {
          <li>
            <img
              style={{ width: "200", height: "200" }}
              className="foodImg"
              src={snack.image}
              alt="image not found"
            />
            <Link className="snack" to={`/snacks/${snack.id}`}>
              {snack.name}
            </Link>
            <div>{snack.is_healthy ? <span>❤️</span> : <span>♡</span>}</div>
            <div>
              <Link to={`/snacks/${snack.id}/edit`}>✏️</Link>
            </div>
          </li>
        }
      </ul>
    </section>
  );
}

export default Snack;

//streach goal aside for each card

// function Snack({ snack }) {
//   console.log(snack);
//   return (
//     <tr>
//       <td>{snack.is_healthy ? <span>"♥"</span> : <span>"♡"</span>}</td>
//       <td>
//         <a href={snack.image} target="_blank" rel="noreferrer">
//           {snack.name}
//         </a>
//         {/* why is clicking on the name of the snack taking me to just the image? */}
//       </td>
//       <td>
//         <Link to={`/snacks/${snack.id}`}>✏️</Link>
//       </td>
//     </tr>
//   );
// }
