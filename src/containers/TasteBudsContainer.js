import React from 'react'
import { connect as cnx } from 'react-redux';
import { getUsers, logInUser } from '../actionCreators'
import TasteBud from '../components/TasteBud'

class TasteBudsContainer extends React.Component {

    state = {
        myBuds: []
    }

    componentDidMount(){
        fetch ('http://localhost:3000/api/v1/users')
            .then(res => res.json())
            .then(users => {
                this.props.getUsers(users)
            })
            .then(this.setState({
                myBuds: []
            }))
            .then(res => {

                this.props.logInUser(this.props.allUsers[0])

                let myLikeCounter = {}

                if (this.props.loggedInUser){
                    console.log('the logged in user is: ', this.props.loggedInUser)
                    this.props.loggedInUser.attributes.likes.map(likeObj => {
                        myLikeCounter[likeObj.restaurant_id] = true
                    })
                }
        
                console.log('my like counter: ', myLikeCounter)
        
                if (this.props.allUsers) {
                    this.props.allUsers.map(user => {
                        console.log('starting a new loop with this user: ', user)
                        if (parseInt(user.id) !== parseInt(this.props.loggedInUser.id)){
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
                                    console.log('user before i add it to mybuds in state: ', user)
                                    if (!(this.state.myBuds.includes(user))){
                                        this.setState({
                                            myBuds: [...this.state.myBuds, user]
                                        })
                                    }
                                }
                            }
                        }
                    })
                }
            })
    }

    render(){

        let tasteBuds

        if (this.state.myBuds.length > 0){
            tasteBuds = this.state.myBuds.map(userObj => {
            return <TasteBud id={userObj.id} user={userObj} key={userObj.id}/>
        })} 


        return(
            <div class="containerdiv">
                <h1>My Taste Buds</h1>
                {tasteBuds}
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
      getUsers: (users) => dispatch(getUsers(users)),
      logInUser: (user) => dispatch(logInUser(user))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(TasteBudsContainer);