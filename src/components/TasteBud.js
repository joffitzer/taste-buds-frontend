import React from 'react'
import { connect as cnx } from 'react-redux';
import Recommendation from '../components/Recommendation'

class TasteBud extends React.Component {

    render(){

        let likedRestaurantIds = this.props.user.attributes.likes.map(likeObj => likeObj.restaurant_id)

        // if (this.props.allRestaurants){
        //     restaurants = this.props.allRestaurants.map(restaurantObj => {
        //     return <Restaurant id={restaurantObj.id} restaurant={restaurantObj.attributes} key={restaurantObj.id}/>
        // })} 
        let likedRestaurants
        if (this.props.allRestaurants){
            likedRestaurants = this.props.allRestaurants.filter(restaurantObj => (likedRestaurantIds.includes(parseInt(restaurantObj.id))))
        }

        let recommendations
        if(likedRestaurants){
            recommendations = likedRestaurants.map(restaurantObj => {
                return <Recommendation restaurant={restaurantObj} key={restaurantObj.id}/> 
            })
        }

        console.log('props on tastebud: ', this.props)
        console.log('liked restaurants: ', likedRestaurants)

        return(
            <div>
                <h3>{this.props.user.attributes.first_name}</h3>
                <img className="restaurantImg" src={this.props.user.attributes.img} alt={this.props.user.attributes.first_name}/>
                <h5> Favorite Cuisine: {this.props.user.attributes.fav_cuisine}</h5>
                <h5> Recommendations: {recommendations}</h5>
                <hr /> 
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//       getRestaurants: (restaurants) => dispatch(getRestaurants(restaurants))
//     }
//   }

export default cnx(mapStateToProps, null)(TasteBud);