"use client"
import React, { useState } from 'react';
import Header from './movieHead.js';
import Movie_Row from './movie_rows.js';
import Footer from './footer.js';
import Delete from './delete.js';
import { movie_lists } from './movie_data.js';

function Random() {
    const [movies, setMovies] = useState(movie_lists);

    function handleDelete(id) {
        const updatedMovies = movies.filter((element) => element.id !== id);
        setMovies(updatedMovies);
    }

    const handleLike = (id) => {
        const updatedMovies = movies.map((moviedata) => {
            if (moviedata.id === id) {
                const vote = moviedata.vote + 1;
                return { ...moviedata, vote };
            }
            return moviedata;
        });

        const sortedMovies = updatedMovies.sort((a, b) => b.vote - a.vote);
        setMovies(sortedMovies);
    };

    const handleDislike = (id) => {
        const updatedMovies = movies.map((moviedata) => {
            if (moviedata.id === id) {
                const vote = moviedata.vote - 1;
                return { ...moviedata, vote };
            }
            return moviedata;
        });

        const sortedMovies = updatedMovies.sort((a, b) => b.vote - a.vote);
        setMovies(sortedMovies);
    };

    return (
        <>
            <Header />
            <div>
                {movies.map((moviedata) => (
                    <Movie_Row
                        key={moviedata.id}
                        movie={moviedata}
                        onClick={() => handleDelete(moviedata.id)}
                        onClickLike={() => handleLike(moviedata.id)}
                        onClickDislike={() => handleDislike(moviedata.id)}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Random;

