let defaultState = {
    loggedInUser: {},
    allRestaurants: [],
    allUsers: [],
    allLikes: []
}

let reducer = (prevState=defaultState, action) => {
    switch(action.type){
        case 'GET_RESTAURANTS': 
          return {...prevState, 
            allRestaurants: action.payload.restaurants.data
        }
        case 'GET_USERS': 
          return {...prevState, 
            allUsers: action.payload.users.data
        }
        case 'GET_LIKES': 
          return {...prevState, 
            allLikes: action.payload.likes.data
        }
        case 'LOG_IN': 
          return {...prevState,
            loggedInUser: action.payload.user
    }
        default: 
          return {...prevState}
    }
}

export default reducer;