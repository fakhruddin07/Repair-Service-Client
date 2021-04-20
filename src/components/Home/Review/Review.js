import React from 'react';

const Review = ({ review }) => {
    return (
        <>
            <div className="col-md-4 mb-3">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">{review.name}</h5>
                        <h6 class="card-text">{review.designation} </h6>
                        <p class="card-text">{review.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;