import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'

class Navbar extends React.Component{

    
    render(){
        console.log('props of navbar: ', this.props)
        let jonah 
        if (this.props.allUsers) {
            jonah = this.props.allUsers[0]
        } 
        return(
            <div>
                <button onClick={() => this.props.logInUser(jonah)}>Log In as Jonah</button>
                <p>All Restaurants</p>
                <p>My Liked Restaurants</p>
                <p>My Taste Buds</p>
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
      logInUser: (user) => dispatch(logInUser(user))
    }
  }

export default cnx(mapStateToProps, mapDispatchToProps)(Navbar);