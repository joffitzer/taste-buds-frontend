let defaultState = {
    loggedInUser: {},
    allRestaurants: []
}

let reducer = (prevState=defaultState, action) => {
    switch(action.type){
        case 'GET_RESTAURANTS': 
          return {...prevState, 
            allRestaurants: action.payload.restaurants
        }
        default: 
          return {...prevState}
    }
}

export default reducer;