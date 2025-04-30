import MovieHolder from "../components/MovieHolder";
import { useEffect, useState } from "react";
import '../CSS/Home.css';
import { searchMovies, getPopularMovies } from "../KeyInfo/Api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movieDB, setMoviedb] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() =>{
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMoviedb(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load Movies. Try again later..!");
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
        },
        []);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(e.target.value);
        searchQuery("");
        
     };

     if (loading) {
        return <div>Loading....</div>
     }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search here for the movie....." 
                className="search-input" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            <div className="movie-list">
                {movieDB.map((movie) => (
                    <MovieHolder movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;