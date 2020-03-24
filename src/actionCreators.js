const GET_RESTAURANTS = "GET_RESTAURANTS"

const getRestaurants = (restaurants) =>({type: GET_RESTAURANTS, payload: { restaurants }})

const GET_USERS = "GET_USERS"

const getUsers = (users) =>({type: GET_USERS, payload: { users }})

const GET_LIKES = "GET_LIKES"

const getLikes = (likes) =>({type: GET_LIKES, payload: { likes }})

const LOG_IN = "LOG_IN"

const logInUser = (user) => ({type: LOG_IN, payload: { user }})

export { getRestaurants, getUsers, getLikes, logInUser }