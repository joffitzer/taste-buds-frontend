import React from 'react'
import { connect as cnx } from 'react-redux';
import { getUsers } from '../actionCreators'

class TasteBudsContainer extends React.Component {

    componentDidMount(){
        fetch ('http://localhost:3000/api/v1/users')
            .then(res => res.json())
            .then(users => {
                this.props.getUsers(users)
            })
    }

    render(){

        let myBuds = []
        let myLikeCounter = {}

        if (this.props.loggedInUser){
            this.props.loggedInUser.attributes.likes.map(likeObj => {
                myLikeCounter[likeObj.restaurant_id] = true
            })
        }

        console.log('my like counter: ', myLikeCounter)

        if (this.props.allUsers) {
            this.props.allUsers.forEach(user => {
                if (parseInt(user.id) !== parseInt(this.props.loggedInUser.id)){
                    // console.log('user in for each: ', user)
                    let userLikeCounter = {}
                    user.attributes.likes.map(likeObj => {
                        userLikeCounter[likeObj.restaurant_id] = true
                    })
    
                    console.log('user like counter: ', userLikeCounter)
                    let sameLikes = 0
                    for (let key in myLikeCounter) {
                        if (key in userLikeCounter){
                            sameLikes += 1
                        }
                        if (sameLikes > 1) {
                            myBuds.push(user)
                        }
                    }
                }
            })
        }

        console.log('my buds array - with two or more of the same likes: ', myBuds)

        return(
            <div>
                <h1>My Taste Buds</h1>
                {/* {restaurants} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allUsers, loggedInUser } = state;
    return {
      allUsers, loggedInUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getUsers: (users) => dispatch(getUsers(users))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(TasteBudsContainer);