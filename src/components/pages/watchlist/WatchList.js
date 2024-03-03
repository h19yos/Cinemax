import React, { useState } from 'react';
import axios from 'axios';

const WatchList = () => {
  const [email, setEmail] = useState('');
  const [imdbId, setImdbId] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const [error, setError] = useState('');

  const addToWatchlist = async () => {
    try {
      const response = await axios.post('http://localhost:8080/watchlist/add-to-watchlist', { email, imdbId });
      console.log('Movie added to watchlist:', response.data);
    } catch (error) {
      console.error('Error adding movie to watchlist:', error);
      setError('Error adding movie to watchlist');
    }
  };

  const getWatchlist = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/watchlist?email=${email}`);
      setWatchlist(response.data);
    } catch (error) {
      console.error('Error getting watchlist:', error);
      setError('Error getting watchlist');
    }
  };

  return (
    <div>
      <h2>Add Movie to Watchlist</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="IMDb ID" value={imdbId} onChange={(e) => setImdbId(e.target.value)} />
      <button onClick={addToWatchlist}>Add to Watchlist</button>

      <h2>User's Watchlist</h2>
      <button onClick={getWatchlist}>Get Watchlist</button>
      <ul>
        {watchlist.map((movieId) => (
          <li key={movieId}>{movieId}</li>
        ))}
      </ul>

      {error && <p>{error}</p>}
    </div>
  );
};

export default WatchList;

