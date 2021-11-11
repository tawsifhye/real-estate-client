import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {

        axios.post('',)
            .then(res => {
                console.log(res);
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
                    <div className="booking-form-container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="fw-bolder">Name</p>
                            <input defaultValue={user.displayName} type='text' {...register("name")} required readOnly />
                            <textarea className="w-100 h-25" placeholder="Leave a comment here" type='text'{...register("comment")} required />
                            <input className='' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddReview;