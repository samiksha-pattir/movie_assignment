import Action from './action.js';
import { movie_lists } from './movie_data.js';

function Movie_Row(props) {
  return (
    <div className="h rows">
        <img id="poster" src="image 1.png" />
        <div className="details">
            <h2 className="title">{props.data.name}</h2>
            <p className="text-muted">{props.data.year}{props.data.time}{props.data.joner}</p>
            <h3 >Discription</h3>
            <p className="description">{props.data.description}</p>
        </div>
        <Action />
    </div>
  );
}
export default Movie_Row;
































