import React from 'react';
import MainContainer from './containers/MainContainer';
import Navbar from './components/Navbar'
import { connect as cnx } from 'react-redux';
import { getRestaurants, getUsers, logInUser } from './actionCreators'

class App extends React.Component {

  componentDidMount() {
    fetch ('http://localhost:3000/api/v1/restaurants')
        .then(res => res.json())
        .then(restaurants => {
            this.props.getRestaurants(restaurants)
        })
        .then(fetch ('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(users => {
            this.props.getUsers(users)
        }))
        .then(() => this.props.logInUser(this.props.allUsers[0]))
    }

  render(){

    return (
      <div>
        <Navbar />
        <MainContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { allRestaurants, allUsers } = state;
  return {
    allRestaurants, allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurants: (restaurants) => dispatch(getRestaurants(restaurants)),
    getUsers: (users) => dispatch(getUsers(users)),
    logInUser: (user) => dispatch(logInUser(user))
  }
}

export default cnx(mapStateToProps, mapDispatchToProps)(App);
