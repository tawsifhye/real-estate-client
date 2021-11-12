import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('https://obscure-river-28202.herokuapp.com/properties', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Service added successful");
                    reset();
                }
            })
    }
    return (
        <>
            <h3 className="text-center">Add Service</h3>
            <div className="add-service-container d-flex justify-content-center mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="fw-bolder">Project Title</p>
                    <input type='text' {...register("name")} required />
                    <p className="fw-bolder">Location</p>
                    <input type='text' {...register("location")} required />
                    <p className="fw-bolder">Area Size</p>
                    <input type='text'{...register("area")} placeholder="e.g. 1200 sqft" required />
                    <p className="fw-bolder">Price</p>
                    <input type='text'{...register("price")} placeholder="e.g. 100k" required />
                    <p className="fw-bolder">Number of Bed</p>
                    <input type='text'{...register("bed")} required />
                    <p className="fw-bolder">Number of Bathroom</p>
                    <input type='text'{...register("bath")} required />
                    <p className="fw-bolder">Image URL</p>
                    <input type='text'{...register("img")} required />
                    <br />
                    <input className='mt-2 btn btn-primary' type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddService;