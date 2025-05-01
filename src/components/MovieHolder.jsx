import '../CSS/MovieHolder.css';
import { useMovieContext } from '../Context/MovieContext';

function MovieHolder({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavClick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)

        
    }

    return(
        <div className="movie-holder">
            <div className="face-card">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="overlay">
                    <button className={`fav-btn ${favorite ? "active" : ""}`} onClick={onFavClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieHolder;