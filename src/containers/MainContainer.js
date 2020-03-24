import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../containers/LandingPage'
import RestaurantsContainer from '../containers/RestaurantsContainer'
import MyRestaurantsContainer from '../containers/MyRestaurantsContainer'
import TasteBudsContainer from '../containers/TasteBudsContainer'

class MainContainer extends React.Component {
    render(){
        return(
            <div>
                <Route exact path="/" render={(routerProps) => <LandingPage {...routerProps}/>} />
                <Route exact path="/restaurants" render={(routerProps) => <RestaurantsContainer {...routerProps}/>} />
                <Route exact path="/my-restaurants" render={(routerProps) => <MyRestaurantsContainer {...routerProps}/>} />
                <Route exact path="/my-taste-buds" render={(routerProps) => <TasteBudsContainer {...routerProps}/>} />
            </div>
        )
    }
}

export default MainContainer;