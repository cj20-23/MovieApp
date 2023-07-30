import React from "react";
import styles from "./Navbar.module.css"

class Navbar extends React.Component{

    render(){

        const {cartCount} = this.props;

        return(

            <>
            <div className={styles.nav}>

                <div className={styles.title}>Movie-App</div>
                <div className={styles.cartContainer}>
                    <img className={styles.cartIcon} alt="cart" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                    <span className={styles.cartCount}>{cartCount}</span>
                </div>
            </div>
            </>

        )
    }

}

export default Navbar;

