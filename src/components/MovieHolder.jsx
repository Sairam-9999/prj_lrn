function MovieHolder({movie}){

    function onFavClick(e){
        alert(`Clicked on fav button for movie`);

        
    }

    return(
        <div className="movie-holder">
            <div className="face-card">
                <img src={movie.url} alt={movie.title} />
                <div className="overlay">
                    <button className="fav-btn" onClick={onFavClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieHolder;