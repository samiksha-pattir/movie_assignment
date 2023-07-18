import Action from './action.js';
import { movie_lists } from './movie_data.js';
import Delete from './delete.js';
function Movie_Row(props) {
  return (
    <div className="h rows">
        <img id="poster" src={props.movie.poster} />
        <div className="details">
            <h2 className="title">{props.movie.name}</h2>
            <p className="text-muted">{props.movie.year}{props.movie.time}{props.movie.joner}</p>
            <h3 >Discription</h3>
            <p className="description">{props.movie.description}</p>
        </div>
        <div className="action">
            <Action />
            <Delete onClick={props.onClick} />
        </div>
    </div>
  );
};

export default Movie_Row;
































