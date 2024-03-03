import React, { useEffect } from 'react';
import './MoviesList.css'
import axios from '../api/axiosConfig'

function MoviesList({ getAllMovies, movies }) {

    const handleAddToWatchlist = async (imdbId) => {
        try {
            await axios.post('http://localhost:8080/watchlist/add-to-watchlist', { email: 'test1@gmail.com', imdbId });
            console.log('Movie added to watchlist:', imdbId);
            // Update the watchlist after adding the movie
            updateWatchlist();
        } catch (error) {
            console.error('Error adding movie to watchlist:', error);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <div className="movie-grid-container">
            {movies.map((movie, index) => (
                <div key={index} className="movie-item">
                    <img src={movie?.poster} alt="poster" className="movie-poster" />
                    <h4>{movie.title}</h4>
                    <p>Genres: {movie.genres.join(', ')}</p>
                    <p>Release Date: {movie.releaseDate}</p>
                    <button onClick={() => handleAddToWatchlist(movie.imdbId)}>Add to Watchlist</button>
                </div>
            ))}
        </div>
    );
}

export default MoviesList;
