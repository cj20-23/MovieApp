import { Component } from "react";
import MovieCard from "./Moviecard";


class MovieList extends Component{

   

render(){

    // const{title,plot,Price,rating,stars,fav,cart}= this.state.movies;
    const{movies, addStars, decStars, toggleCart, toggleFav} = this.props;

    return(
        <>

        {movies.map((movie)=> <MovieCard movies={movie} addStars ={addStars} 
                                                        decStars ={decStars}
                                                        toggleFav= {toggleFav}
                                                        toggleCart={toggleCart} 
                                                        key={movie.id}/>)}
       

        </>
        
    )

}
}

export default MovieList