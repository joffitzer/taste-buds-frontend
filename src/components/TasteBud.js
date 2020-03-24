import React from 'react'
import { connect as cnx } from 'react-redux';

class TasteBud extends React.Component {

    render(){

        this.props.user.attributes.likes.map(likeObj => {
            console.log('like obj in taste bud: ', likeObj)
        })

        // if (this.props.allRestaurants){
        //     restaurants = this.props.allRestaurants.map(restaurantObj => {
        //     return <Restaurant id={restaurantObj.id} restaurant={restaurantObj.attributes} key={restaurantObj.id}/>
        // })} 

        console.log('props on tastebud: ', this.props)

        return(
            <div>
                <h3>{this.props.user.attributes.first_name}</h3>
                <img className="restaurantImg" src={this.props.user.attributes.img} alt={this.props.user.attributes.first_name}/>
                <h5> Favorite Cuisine: {this.props.user.attributes.fav_cuisine}</h5>
                <h5> Likes: {this.props.user.attributes.fav_cuisine}</h5>
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