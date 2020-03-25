import React from 'react'
import { connect as cnx } from 'react-redux';
import Restaurant from '../components/Restaurant'
import { getLikes } from '../actionCreators'

class MyRestaurantsContainer extends React.Component {

    state = {
        likedRestaurants: []
    }

    componentDidMount(){
        fetch ('http://localhost:3000/api/v1/likes')
            .then(res => res.json())
            .then(likes => {
                this.props.getLikes(likes)
            })
            .then(res => {
                let myLikes
                if(this.props.allLikes){
                    myLikes = this.props.allLikes.filter(likeObj => (parseInt(this.props.loggedInUser.id) === parseInt(likeObj.attributes.user.user.id)))
                    myLikes = myLikes.map(likeObj => {
                        return likeObj.attributes.restaurant.restaurant.id
                    })
                }

                if (myLikes.length > 0){

                    if (this.props.allRestaurants){

                        return this.props.allRestaurants.filter(restaurantObj => myLikes.includes(parseInt(restaurantObj.id)))
                    } 
                }
            })
            .then(myLikedRestaurants => {
                this.setState({
                    likedRestaurants: myLikedRestaurants
                })
            })
    }

    removeLike = (restaurantId) => {
        this.setState({
            likedRestaurants: [...this.state.likedRestaurants].filter(restaurantObj => (parseInt(restaurantObj.id)) !== parseInt(restaurantId))
        })
    }

    render(){

        let myRestaurants
        if (this.state.likedRestaurants){
            myRestaurants = this.state.likedRestaurants.map(restaurantObj => {
                    return <Restaurant id={restaurantObj.id} restaurant={restaurantObj.attributes} key={restaurantObj.id} removeLike={this.removeLike}/>
            })
        }

        console.log('state of my restaurants container: ', this.state)

        return(
            <div class="containerdiv">
                <h1>My Liked Restaurants</h1>
                {myRestaurants}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allRestaurants, allLikes, loggedInUser } = state;
    return {
      allRestaurants, allLikes, loggedInUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getLikes: (likes) => dispatch(getLikes(likes))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(MyRestaurantsContainer);