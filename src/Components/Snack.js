import { Link } from "react-router-dom";

function Snack({ snack }) {
  // console.log(snack);
  return (

    <section>
      <ul>
        {
          <li>
            <Link className="snackPicBoc" to={`/snacks/${snack.id}`}>
              <img
                style={{ width: "200", height: "200" }}
                className="foodImg"
                src={  
                  snack.image ? snack.image
                  : "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp"}
                alt="image not found"
              />
            </Link>
            <Link className="snackNameBox" to={`/snacks/${snack.id}`}>
              {snack.name}
            </Link>
            <span>{snack.is_healthy ? <span className="redHeart">❤️</span> : <span className="blackHeart">♡</span>} </span>
            <span>{"     "}</span>
            <span>
              <Link to={`/snacks/${snack.id}/edit`} className="editPencil">✏️</Link>
            </span>
          </li>
        }
      </ul>
    </section>
  );
}

export default Snack;

//old heart <span>♡</span>  not visible enough

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
