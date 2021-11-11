import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './AddReview.css'

const AddReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.acknowledged) {
                    window.confirm("Review Added");
                    reset()
                }
            })
    }
    return (
        <>
            <div className="">
                <h2 className="text-center">Add Review</h2>
                <div className="ps-xl-5 ps-xxl-5 custom-font-booking ">
                    <div className="review-form-container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="fw-bolder">Name</p>
                            <input defaultValue={user.displayName} type='text' {...register("name")} required readOnly />
                            <textarea className="w-100 h-25" placeholder="Leave a comment here" type='text'{...register("comment")} required />
                            <h6>Rating</h6>
                            <div className="mb-5">
                                <select {...register("rating", { required: true })}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <input className='' type="submit" />

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddReview;