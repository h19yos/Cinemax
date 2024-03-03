import './App.css';
import api from './api/axiosConfig.js';
import { useState, useEffect, Profiler } from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import Register from './authorization/Register/Register';
import Login from '../src/authorization/Login/Login.js';
import ContactUs from './contacts/ContactUs.js';
import Profile from './authorization/Profile/Profile';
import Footer from "./components/footer/Footer.js";
import MoviesList from './movieslist/MoviesList.js';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getAllMovies = async () => {

    try {

      const response = await api.get(`http://localhost:8080/movies`);

      setMovies(response.data);

    }
    catch (err) {
      console.log(err);
    }
  }

  const getSingleMovie = async (movieId) => {

    try {
      const response = await api.get(`http://localhost:8080/movies/${movieId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviews);

    }
    catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    getAllMovies();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home movies={movies} />} />
        <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/reviews/:movieId" element={<Reviews getSingleMovie={getSingleMovie} movie={movie} reviews={reviews} setReviews={setReviews} />} />
        <Route path="/movieslist" element={<MoviesList getAllMovies={getAllMovies} movies={movies} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
