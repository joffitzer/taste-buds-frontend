import React from 'react'
import { connect as cnx } from 'react-redux';
import { logInUser } from '../actionCreators'
import {Link} from 'react-router-dom'
import logo from '../tb-logo-white.png'


class Navbar extends React.Component{

    
    render(){

        let jonah 
        if (this.props.allUsers) {
            jonah = this.props.allUsers[0]
        } 

        return(
            <div class="topnav">
                
                <Link to="/"><img class="navlogo" src={logo} alt="logo"/></Link>

                <div class="navtext">
                    
                    <Link to="/" onClick={() => this.props.logInUser(jonah)}>Log In as Jonah</Link>
                    
                    <Link to="/restaurants">All Restaurants</Link>
                    
                    <Link to="/my-restaurants">My Liked Restaurants</Link>
                    
                    <Link to="/my-taste-buds">My Taste Buds</Link>
                </div>

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