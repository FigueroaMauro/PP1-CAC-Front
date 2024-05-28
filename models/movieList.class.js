export class MovieList{
    movieList;
    constructor(){
        this.movieList = new Array();
    }
    
     addMovie =(movie)=>{
        this.movieList.push(movie)
    }
    
     showList =()=>{
        this.movieList.forEach(element => console.log(element))
    }
}