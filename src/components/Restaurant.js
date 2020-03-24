import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';

class Restaurant extends React.Component {

    handleLike = () => {
        console.log("clicking like button")
        fetch('http://localhost:3000/api/v1/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'},
            body: JSON.stringify({
                user_id: this.props.loggedInUser.id, 
                restaurant_id: this.props.id
            })
          })
          .then(response => console.log(response))
    }

    handleRemoveLike = () => {
        console.log("removing like")
        fetch('http://localhost:3000/api/v1/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'},
            body: JSON.stringify({
                user_id: this.props.loggedInUser.id, 
                restaurant_id: this.props.id
            })
          })
          .then(response => console.log(response))
    }

    render(){

        console.log('props of restaurant: ', this.props)

        let isLiked
        let likes 
        let restaurantsLiked

        if (this.props.loggedInUser.id > 0) {
            likes = this.props.loggedInUser.attributes.likes
            restaurantsLiked = likes.map(likeObj => likeObj.restaurant_id)
            if (restaurantsLiked.includes(parseInt(this.props.id))){
                isLiked = true
            } else {
                isLiked = false
            }
        } 

        
        return(
            <div>
                <h2>{this.props.restaurant.name}</h2>
                <img className="restaurantImg" src={this.props.restaurant.img} alt={this.props.restaurant.name}/>
                <h4>{this.props.restaurant.neighborhood}</h4>
                <h5>{this.props.restaurant.cuisine}</h5>
                <a href={this.props.restaurant.link}>Click here to read {this.props.restaurant.author}'s review of {this.props.restaurant.name}</a><br />
                {isLiked ? 
                    <button onClick={this.handleLike}>Click here to like this restaurant</button>
                    :
                    <button onClick={this.handleRemoveLike}>Click here to unlike this restaurant</button>
                }
                <hr />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser } = state;
    return {
      loggedInUser
    }
}

export default cnx(mapStateToProps, null)(Restaurant);