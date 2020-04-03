import React from 'react'
import { connect as cnx } from 'react-redux';
import Recommendation from '../components/Recommendation'

function TasteBud (props) {

        let likedRestaurantIds = props.user.attributes.likes.map(likeObj => likeObj.restaurant_id)

        let likedRestaurants
        if (props.allRestaurants){
            likedRestaurants = props.allRestaurants.filter(restaurantObj => (likedRestaurantIds.includes(parseInt(restaurantObj.id))))
        }

        let recommendations
        if(likedRestaurants){
            recommendations = likedRestaurants.map(restaurantObj => {
                return <Recommendation restaurant={restaurantObj} key={restaurantObj.id}/> 
            })
        }

        return(
            <div className="tastebuddiv">
                <h2>{props.user.attributes.first_name}</h2>
                <img className="profilepic" src={props.user.attributes.img} alt={props.user.attributes.first_name}/>
                <div className="tastebudtext">
                    <h5> Favorite Cuisine: {props.user.attributes.fav_cuisine}</h5>
                    <h5> Recommendations: {recommendations}</h5>      
                </div>
                <hr /> 
            </div>
        )
}

const mapStateToProps = (state) => {
    let { allRestaurants } = state;
    return {
      allRestaurants
    }
}

export default cnx(mapStateToProps, null)(TasteBud);