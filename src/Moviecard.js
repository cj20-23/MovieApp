import React from "react";
import './index.css'
import img from './avengers.jpg'

class MovieCard extends React.Component{
    render(){

        const {movies, addStars, decStars, toggleFav, toggleCart} = this.props;

        const { title,plot, Price, rating, stars, fav, isInCart} = this.props.movies;       
       return (
        
        <div className="main">
            <div className="movie-card">

                <div className="left">
                    <img alt="Poster" src={img} width={250} />

                </div>


                <div className="right">
                    <div className="title">
                        {title}            
                    </div>

                    <div className="plot">
                        {plot}                     
                    </div>

                    <div className="price">
                        Rs. {Price}
                    </div>

                    <div className="footer">

                        <div className="rating">{rating}</div>

                        <div className="star-dis">
                            
                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="decrease" onClick={() =>{decStars(movies)}} />

                            <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png" className="stars"/>

                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" alt="increase" onClick={() => {addStars(movies)}}/>

                            <span className="starCount">{stars}</span>
                            
                        </div>

                        {fav? <button className="unfavourite-btn" onClick={()=>{toggleFav(movies)}}>Un-favourite</button>:<button className="favourite-btn" onClick={()=>{toggleFav(movies)}}>Favourite</button>}
{/* conditional rendering above */}
                        {/* <button className="favourite-btn">Favourite</button>
                        <button className="unfavourite-btn">Un-favourite</button> */}


                        {isInCart?<button className="unfavourite-btn" onClick={()=>{toggleCart(movies)}}>Remove from cart</button>:<button className="cart-btn" onClick={()=>{toggleCart(movies)}}>Add to cart</button>}
                        
                    </div>

                </div>

            </div>
        </div>

       )

    }
}

export default MovieCard;