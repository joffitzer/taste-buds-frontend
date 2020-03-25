import React from 'react'

class Recommendation extends React.Component{
    render(){
        console.log('props in rec: ', this.props)
        return(
            <div>
                <a href={this.props.restaurant.attributes.link}>{this.props.restaurant.attributes.name} in {this.props.restaurant.attributes.neighborhood} - Click here to read {this.props.restaurant.attributes.author}'s review</a><br />
            </div>
        )
    }
}

export default Recommendation;