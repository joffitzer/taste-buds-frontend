import React from 'react'
import { connect as cnx } from 'react-redux';
import { getLikes } from '../actionCreators'

class Restaurant extends React.Component {

    state = {
        isLiked: false
    }

    componentDidMount(){
        fetch ('http://localhost:3000/api/v1/likes')
            .then(res => res.json())
            .then(likes => {
                this.props.getLikes(likes)
            })
            .then(res => {
                return this.props.allLikes.filter(likeObj => (parseInt(likeObj.attributes.user.user.id) === parseInt(this.props.loggedInUser.id)))
            })
            .then(myLikes => {
                return myLikes.map(likeObj => likeObj.attributes.restaurant.restaurant.id)
            })
            .then(likedIds => {
                console.log('liked ids', likedIds)
                console.log('this.props.id', this.props.id)

                if (likedIds.includes(parseInt(this.props.id))){
                    this.setState({
                        isLiked: true
                    })
                } else {
                    this.setState({
                        isLiked: false
                    })
                }
            }
        )
    }

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
          .then(this.setState({
              isLiked: true
          }))
    }

    
    handleRemoveLike = () => {
        let likeToDelete
        if (this.props.removeLike){
            this.props.removeLike(this.props.id)
        }
        fetch ('http://localhost:3000/api/v1/likes')
            .then(res => res.json())
            .then(likes => {
                this.props.getLikes(likes)
            })
            .then(res => {
                likeToDelete = this.props.allLikes.find(likeObj => (likeObj.attributes.restaurant.restaurant.id === parseInt(this.props.id)) && (likeObj.attributes.user.user.id === parseInt(this.props.loggedInUser.id)))
                console.log('liketodelete: ', likeToDelete)
                return likeToDelete;
            })
            .then(likeToDelete => {
                fetch(`http://localhost:3000/api/v1/likes/${parseInt(likeToDelete.id)}`, {
                    method: 'DELETE'
                })
            })
            .then(this.setState({
                isLiked: false
            }))
    }

    render(){
        
        return(
            <div>
                <h2>{this.props.restaurant.name}</h2>
                <img className="restaurantImg" src={this.props.restaurant.img} alt={this.props.restaurant.name}/>
                <h4>{this.props.restaurant.neighborhood}</h4>
                <h5>{this.props.restaurant.cuisine}</h5>
                <a href={this.props.restaurant.link}>Click here to read {this.props.restaurant.author}'s review of {this.props.restaurant.name}</a><br />
                {this.state.isLiked ? "You've liked this restaurant" : ""}
                {this.state.isLiked ? 
                    <button onClick={this.handleRemoveLike}>Click here to unlike this restaurant</button>
                    :
                    <button onClick={this.handleLike}>Click here to like this restaurant</button>
                }
                <hr />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { loggedInUser, allLikes } = state;
    return {
      loggedInUser, allLikes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getLikes: (likes) => dispatch(getLikes(likes))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(Restaurant);