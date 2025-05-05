import '../CSS/Favorites.css';
import { useMovieContext } from '../Context/MovieContext';
import MovieHolder from '../components/MovieHolder';


function FvBookmark(){
    const {favorites} = useMovieContext();

    if (favorites.length>0){
    return (
            <div className='fav-bm'>
                <h2>Your Favorites</h2>
                <div className="movie-list">
                {favorites.map((movie) => (
                    <MovieHolder movie={movie} key={movie.id} />
                ))}
                </div>
            </div>)
    }

    return(
        <div className="favorites-empty">
            <h2>No favorite movies yet</h2>
            <p>Start adding to this list. Go to "Home" page.</p>
        </div>

    )
}

export default FvBookmark;