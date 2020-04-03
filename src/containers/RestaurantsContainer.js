import React from 'react'
import { connect as cnx } from 'react-redux';
import Restaurant from '../components/Restaurant'

function RestaurantsContainer (props) {

        let restaurants;

        if (props.allRestaurants){
            restaurants = props.allRestaurants.map(restaurantObj => {
            return <Restaurant id={restaurantObj.id} restaurant={restaurantObj.attributes} key={restaurantObj.id}/>
        })} 

        return(
            <div class="containerdiv">
                <h1 class="headertext">All Restaurants</h1>
                {restaurants}
            </div>
        )
}

const mapStateToProps = (state) => {
    let { allRestaurants } = state;
    return {
      allRestaurants
    }
}

export default cnx(mapStateToProps, null)(RestaurantsContainer);