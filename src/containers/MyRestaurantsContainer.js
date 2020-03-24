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
                    myLikes = this.props.allLikes.filter(likeObj => (this.props.loggedInUser.id === likeObj.attributes.user.user.id))
                    myLikes = this.props.allLikes.map(likeObj => {
                        return likeObj.attributes.restaurant.restaurant.id
                    })
                }

                let likedRestaurants;

                if (myLikes.length > 0){

                    if (this.props.allRestaurants){

                        return likedRestaurants = this.props.allRestaurants.filter(restaurantObj => myLikes.includes(parseInt(restaurantObj.id)))
                    } 
                }
            })
            .then(likedRestaurants => {
                this.setState({
                    likedRestaurants: likedRestaurants
                })
            })
    }

    removeLike = (restaurantId) => {
        this.setState({
            likedRestaurants: [...this.state.likedRestaurants].filter(restaurantObj => (parseInt(restaurantObj.id)) !== parseInt(restaurantId))
        })
    }

    render(){

        // let myLikes
        // if(this.props.allLikes){
        //     myLikes = this.props.allLikes.filter(likeObj => (this.props.loggedInUser.id === likeObj.attributes.user.user.id))
        //     myLikes = this.props.allLikes.map(likeObj => {
        //         return likeObj.attributes.restaurant.restaurant.id
        //     })
        // }

        // let likedRestaurantIds;
        // let myRestaurants;

        // if (myLikes.length > 0){

        //     if (this.props.allRestaurants){

        //         likedRestaurantIds = this.props.allRestaurants.filter(restaurantObj => myLikes.includes(parseInt(restaurantObj.id)))

        //         myRestaurants = likedRestaurantIds.map(restaurantObj => {
        //             return <Restaurant id={restaurantObj.id} restaurant={restaurantObj.attributes} key={restaurantObj.id}/>
        //     })} 

        // }

        let myRestaurants
        myRestaurants = this.state.likedRestaurants.map(restaurantObj => {
                return <Restaurant id={restaurantObj.id} restaurant={restaurantObj.attributes} key={restaurantObj.id} removeLike={this.removeLike}/>
        })

        console.log('state of my restaurants container: ', this.state)

        return(
            <div>
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