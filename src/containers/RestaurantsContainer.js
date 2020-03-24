import React from 'react'
import { connect as cnx } from 'react-redux';
import Restaurant from '../components/Restaurant'

class RestaurantsContainer extends React.Component {
    render(){

        let restaurants;

        if (this.props.allRestaurants){
            restaurants = this.props.allRestaurants.map(restaurantObj => {
            return <Restaurant key={restaurantObj.id} restaurant={restaurantObj.attributes}/>
        })} 

        return(
            <div>
                <h1>All Restaurants</h1>
                {restaurants}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allRestaurants } = state;
    return {
      allRestaurants
    }
}

export default cnx(mapStateToProps, null)(RestaurantsContainer);