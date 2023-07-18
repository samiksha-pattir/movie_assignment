"use client"
import React, { useState} from 'react';
import Header from './movieHead.js';
import Movie_Row from './movie_rows.js';
import Footer from './footer.js';
import Delete from './delete.js';
import { movie_lists } from './movie_data.js';

function Random(){
    const [movies, setMovies] = useState(movie_lists);
    function handleDelete (id) {
        const updatedMovies = movies.filter((elements) => elements.id !==id);
        setMovies(updatedMovies)
    };
    return (
        <>
            <Header/>
            <div>
      		    {movies.map((moviedata) => (
        		    <Movie_Row
                        key={moviedata.id}
                        movie={moviedata}
                        onClick={() => handleDelete(moviedata.id)} 
                    />

                ))}
    	    </div>
            <Footer />
        </>
  );
}
export default Random;



