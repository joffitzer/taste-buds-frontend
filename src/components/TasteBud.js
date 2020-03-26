import React from 'react'
import { connect as cnx } from 'react-redux';
import Recommendation from '../components/Recommendation'

class TasteBud extends React.Component {

    render(){

        let likedRestaurantIds = this.props.user.attributes.likes.map(likeObj => likeObj.restaurant_id)

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

        return(
            <div className="tastebuddiv">
                <h2>{this.props.user.attributes.first_name}</h2>
                <img className="profilepic" src={this.props.user.attributes.img} alt={this.props.user.attributes.first_name}/>
                <div className="tastebudtext">
                    <h5> Favorite Cuisine: {this.props.user.attributes.fav_cuisine}</h5>
                    <h5> Recommendations: {recommendations}</h5>      
                </div>
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

export default cnx(mapStateToProps, null)(TasteBud);