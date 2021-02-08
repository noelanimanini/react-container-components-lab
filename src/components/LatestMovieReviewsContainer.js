import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL).then(res => res.json()).then(({response}) => this.setState({reviews: response.map(results => ({url: results.link.url}))}).catch(error => console.log(error))
            // ({reviews: response.map(review => ({url: review.results.link.url}))))
        
        )}
    render () {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
