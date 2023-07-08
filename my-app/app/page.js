import Header from './movieHead.js';
import Movie_Row from './movie_rows.js';
import Footer from './footer.js';
import { movie_lists } from './movie_data.js';

function Random() {
    return (
        <div>
            <Header />
            {movie_lists.map((movie)=>(
                <Movie_Row data={movie} />
            ))}
            <Footer />
    </div>
  );
}

export default Random;


