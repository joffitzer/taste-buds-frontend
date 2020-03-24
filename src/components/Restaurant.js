import React from 'react'
import {Link} from 'react-router-dom'
import { connect as cnx } from 'react-redux';

class Restaurant extends React.Component {

    state = {
        isLiked: false
    }

    handleLike = () => {
        console.log("clicking like button")
        //send post
    }

    handleRemoveLike = () => {
        console.log("removing like")
    }

    render(){
        return(
            <div>
                <h2>{this.props.restaurant.name}</h2>
                <img className="restaurantImg" src={this.props.restaurant.img} alt={this.props.restaurant.name}/>
                <h4>{this.props.restaurant.neighborhood}</h4>
                <h5>{this.props.restaurant.cuisine}</h5>
                <a href={this.props.restaurant.link}>Click here to read {this.props.restaurant.author}'s review of {this.props.restaurant.name}</a><br />
                {this.state.isLiked ? 
                    <button onClick={this.handleLike}>Click here to like this restaurant</button>
                    :
                    <button onClick={this.handleRemoveLike}>Click here to unlike this restaurant</button>
                }
                <hr />
            </div>
        )
    }
}

export default Restaurant;