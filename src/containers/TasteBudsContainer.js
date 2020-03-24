import React from 'react'
import { connect as cnx } from 'react-redux';

class TasteBudsContainer extends React.Component {

    render(){

        // let restaurants;

        // if (this.props.allRestaurants){
        //     restaurants = this.props.allRestaurants.map(restaurantObj => {
        //     return <Restaurant id={restaurantObj.id} restaurant={restaurantObj.attributes} key={restaurantObj.id}/>
        // })} 

        return(
            <div>
                <h1>My Taste Buds</h1>
                {/* {restaurants} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { allRestaurants } = state;
    return {
      allRestaurants
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       getLikes: (likes) => dispatch(getLikes(likes))
//     }
//   }

export default cnx(mapStateToProps, null)(TasteBudsContainer);