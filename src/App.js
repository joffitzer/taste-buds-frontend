import React from 'react';
import MainContainer from './containers/MainContainer';
import Navbar from './components/Navbar'
import { connect as cnx } from 'react-redux';
import { getRestaurants, getUsers } from './actionCreators'

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
  let { allRestaurants } = state;
  return {
    allRestaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurants: (restaurants) => dispatch(getRestaurants(restaurants)),
    getUsers: (users) => dispatch(getUsers(users))
  }
}

export default cnx(mapStateToProps, mapDispatchToProps)(App);
