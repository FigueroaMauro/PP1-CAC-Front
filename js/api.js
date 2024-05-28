import { Movie } from "../models/movie.class.js";
import { MovieList } from "../models/movieList.class.js";

const movieContainer = document.querySelector("#movie-container")
let movieList = new MovieList();
let numPage = 1;

const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");

btnNext.addEventListener("click", ()=>{
    numPage++;
    movieList = new MovieList();
    apiMovie()
});

btnPrev.addEventListener("click", ()=>{
    if(numPage >1){
        numPage--;
        movieList = new MovieList();
        apiMovie()
    }

});

const apiMovie = async () => {
    
    const api = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=8b5bd66e736e7f8df81980e6ea5a78a0&page=" + numPage)
    const data = await api.json();

    data.results.forEach(element => {
        movieList.addMovie(new Movie(element.title, element.overview, element.poster_path))
    });

    createMovieNode()
}




const createMovieNode = () => {

    let movieData = "";
    movieList.movieList.forEach(movie => {
        movieData += `
        <div class="movies">
             <a href="./details.html">
                <div class="movie">
                    <img src="https://image.tmdb.org/t/p/original${movie.imgUrl}" alt="" />
                    <div class="movie-title">
                        <h3>${movie.name}</h3>
                    </div>
                </div>
            </a>
        </div>
        `
    })

    movieContainer.innerHTML = "";
    movieContainer.innerHTML = movieData
}

apiMovie()

