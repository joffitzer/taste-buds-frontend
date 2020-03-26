import React from 'react'

const Recommendation = (props) => {
        return(
            <div>
                <a href={props.restaurant.attributes.link}>{props.restaurant.attributes.name} in {props.restaurant.attributes.neighborhood} - Click here to read {props.restaurant.attributes.author}'s review</a><br />
            </div>
        )
}

export default Recommendation;