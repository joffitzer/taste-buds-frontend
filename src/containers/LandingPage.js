import React from 'react'
import {Link} from 'react-router-dom'
import { logInUser } from '../actionCreators'
import { connect as cnx } from 'react-redux';

class LandingPage extends React.Component {

    // handlelogIn = (user) => {
    //     console.log('user: ', user)
    //     localStorage.setItem("Logged In", user.first_name)
    //     this.props.logInUser(user)
    // }
    
    render(){

        let jonah 
        if (this.props.allUsers) {
            jonah = this.props.allUsers[0]
        } 

        return(
            <div>
                {/* <Link to="/restaurants"><button onClick={() => this.props.logInUser(jonah)}>Log In as Jonah</button></Link><br /> */}
                {/* <Link to="/restaurants"> */}
                    {/* <button onClick={() => this.props.logInUser(jonah)}>Log In as Jonah</button> */}
                {/* </Link><br /> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logInUser: (user) => dispatch(logInUser(user))
    }
  }

export default cnx(null, mapDispatchToProps)(LandingPage);