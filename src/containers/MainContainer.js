import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../containers/LandingPage'
import RestaurantsContainer from '../containers/RestaurantsContainer'
import MyRestaurantsContainer from '../containers/MyRestaurantsContainer'

class MainContainer extends React.Component {
    render(){
        return(
            <div>
                <Route exact path="/" render={(routerProps) => <LandingPage {...routerProps}/>} />
                <Route exact path="/restaurants" render={(routerProps) => <RestaurantsContainer {...routerProps}/>} />
                <Route exact path="/my-restaurants" render={(routerProps) => <MyRestaurantsContainer {...routerProps}/>} />
            </div>
        )
    }
}

export default MainContainer;