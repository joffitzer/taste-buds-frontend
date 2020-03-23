import React from 'react';
import MainContainer from './containers/MainContainer';
import { connect as cnx } from 'react-redux';
import { getRestaurants } from './actionCreators'

class App extends React.Component {

  componentDidMount() {
    fetch ('http://localhost:3000/api/v1/restaurants')
        .then(res => res.json())
        .then(restaurants => {
            this.props.getRestaurants(restaurants)
        })
    }

  render(){

    console.log("app props w/ redux store: ", this.props)

    return (
      <div>
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
    getRestaurants: (restaurants) => dispatch(getRestaurants(restaurants))
  }
}

export default cnx(mapStateToProps, mapDispatchToProps)(App);
