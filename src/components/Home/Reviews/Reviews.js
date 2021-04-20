import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <h1 class="text-center">Customer Reviews</h1>
                </div>
                <div className="row">
                    {
                        reviews.map(review => <Review review={review}></Review>)
                    }
                </div>
            </div>
        </>
    );
};

export default Reviews;