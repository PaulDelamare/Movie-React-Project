import "./App.css";
import { Routes, Route } from "react-router";
import MovieListPage from "./components/movieList/MovieList";
import Navbar from "./components/utils/navbar/Navbar";
import Wishlist from "./components/wishList/Wishlist";
import MovieDetail from "./components/movieDetail/MovieDetail";

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
