import '../CSS/MovieHolder.css';

function MovieHolder({movie}){

    function onFavClick(e){
        alert(`Clicked on fav button for movie`);

        
    }

    return(
        <div className="movie-holder">
            <div className="face-card">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="overlay">
                    <button className="fav-btn" onClick={onFavClick}>
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