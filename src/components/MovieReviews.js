// Code MovieReviews Here
import React from 'react'; 

class MovieReviews extends React.Component {
    render () {
        return (
            <div className="review-list">
                {this.props.reviews}
            </div>
        )
    }
}
export default MovieReviews