import React from 'react'
import {Link} from 'react-router-dom'
import { logInUser } from '../actionCreators'
import { connect as cnx } from 'react-redux';
import logo from '../tb-logo-black.png'

const LandingPage = () => {
    return(
        <div>
            <img class="center"src={logo} alt="logo"/>
        </div>
    )
}

export default LandingPage;