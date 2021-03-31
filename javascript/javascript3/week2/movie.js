async function moviesData() {
    try {
        const movieResponse = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        const moviesDta = await movieResponse.json();
        const badMovies = moviesDta.filter((moviesDetailes) => moviesDetailes.rating < 4);
        console.log(badMovies);
        const badMoviesafter2000 = badMovies.filter((badmoviesData) => badmoviesData.year > 2000)
        console.log(badMoviesafter2000);

    } catch (error) {
        console.log("error");

    }
}

moviesData();