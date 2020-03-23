import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render(){
        return(
            <div>
                <Link to="/restaurants">View All Restaurants</Link>
                <h1>My Favorite Restaurants</h1>
                <h1>My Taste Buds</h1>
            </div>
        )
    }
}

export default LandingPage;