import React, { useEffect, useState } from 'react';
import './Review.css'


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://obscure-river-28202.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <>
            <div className="mb-5 mx-auto review-container container">
                <div className="row mt-5">

                    <div className="review-container-text text-center">
                        <h1> Happy Client</h1>

                    </div>
                    {!reviews && (<div className="text-center">
                        <div className="spinner-grow text-danger text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h3 className="text-primary">Testimonial</h3>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {reviews.map(review =>
                                        <div key={review._id}>
                                            <div class="shadow p-3 mb-5 bg-body rounded">
                                                <h6>{review.name}</h6>
                                                <p>Rating: {review.rating}</p>
                                                <p>{review.comment}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xl-4 g-4 mb-5 mx-auto">
                        {reviews.map(review =>
                            <div key={review._id}>
                                <div className="card text-white bg-dark mb-3" style={{ Width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{review.name}</h5>
                                        <p className="card-text">{review.comment}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div> */}

                </div>

            </div>
        </>
    );
};

export default Review;