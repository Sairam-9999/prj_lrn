import MovieHolder from "../components/MovieHolder";

function Home() {
    const movieDB = [
        { id: 1, title: "John Wick", releaseDate: "2002" },
        { id: 2, title: "Matrix", releaseDate: "1999" },
        { id: 3, title: "NTTRNEEL", releaseDate: "2026" },
        { id: 4, title: "Vikram", releaseDate: "2022" },
    ]

    const handleSearch = () =>{};

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search here for the movie....." className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movie-list">
                {movieDB.map((movie) => (
                    <MovieHolder movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;