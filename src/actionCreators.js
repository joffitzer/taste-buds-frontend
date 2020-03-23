const GET_RESTAURANTS = "GET_RESTAURANTS"

const getRestaurants = (restaurants) =>({type: GET_RESTAURANTS, payload: { restaurants }})

export { getRestaurants }