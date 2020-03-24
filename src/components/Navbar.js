import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    
    render(){
        
        let jonah 
        if (this.props.allUsers) {
            jonah = this.props.allUsers[0]
        } 
        return(
            <div>
                <button onClick={() => this.props.logInUser(jonah)}>Log In as Jonah</button><br />
                <Link to="/restaurants">All Restaurants</Link><br />
                <Link to="/my-restaurants">My Liked Restaurants</Link><br />
                <Link to="/my-taste-buds">My Taste Buds</Link><br />
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