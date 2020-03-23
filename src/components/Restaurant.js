import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';

const Restaurant = (props) => {

    console.log('restaurant props: ', props)
    return(
        <div>
            <h5>Restaurant Name: {props.restaurant.name}</h5>
            <img className="restaurantImg" src={props.restaurant.img} alt={props.restaurant.name}/>
            <h5>Neighborhood: {props.restaurant.neighborhood}</h5>
            <h5>Cuisine: {props.restaurant.cuisine}</h5>
            <h5>Link: {props.restaurant.link}</h5>
            <h5>Author: {props.restaurant.author}</h5>
            <h5>Rating: {props.restaurant.rating}</h5>
        </div>
    )
}

// export default cnx(null, mapDispatchToProps)(Restaurant);

export default Restaurant;