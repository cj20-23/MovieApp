import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./MoviesData";

class App extends React.Component {

  constructor(){
    super();
    this.state ={
        movies: movies,
        cartCount:0
    }
}

handleIncreaseStar=(movie)=>{

    const {movies} = this.state;

    const movieID = movies.indexOf(movie);

    if(movies[movieID].stars>=5){
        return;
    }

    movies[movieID].stars += 0.5;

    this.setState({
        movies: movies
    })
}

handleDecStars = (movie) =>{
    const {movies} = this.state;
    const movieID = movies.indexOf(movie);

    if(movies[movieID].stars<=0){
        return;
    }        

    movies[movieID].stars -= 0.5;

    this.setState({
        movies: movies
    })
}

handleToggleFav = (movie) =>{
    const {movies} = this.state;
    const movieID = movies.indexOf(movie);
    movies[movieID].fav = ! movies[movieID].fav;

    this.setState({
        movies: movies
    })
}

handleToggleCart = (movie) =>{
    let {movies, cartCount} = this.state;
    const movieID = movies.indexOf(movie);
    movies[movieID].isInCart = ! movies[movieID].isInCart;
    if(movies[movieID].isInCart){
      cartCount +=1;
    }else{
      cartCount-=1;
    }

    this.setState({
        movies: movies,
        cartCount:cartCount
    })
}

  render(){

    const {movies, cartCount} = this.state;

  return (
    <>
    <Navbar cartCount={cartCount}/>
    <MovieList movies={movies} addStars ={this.handleIncreaseStar} 
                                                        decStars ={this.handleDecStars}
                                                        toggleFav= {this.handleToggleFav}
                                                        toggleCart={this.handleToggleCart} 
                                                        />
    </>
  );
}
}

export default App;
