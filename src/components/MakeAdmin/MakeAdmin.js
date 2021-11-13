import axios from 'axios';
import { useForm } from 'react-hook-form';
import "./MakeAdmin.css"
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.put(`https://obscure-river-28202.herokuapp.com/users/${data.email}`)
            .then(res => {
                if (res.data.modifiedCount || res.data.upsertedCount) {
                    alert("Admin add successful")
                }
                if (res.data.isAdmin) {
                    alert("User already a Admin")
                }
                if (!res.data.registered) {
                    alert("Not Registered! Please resister")
                }
            })
    };
    return (
        <>
            <h2 className="text-center">Make Admin</h2>
            <div className="mt-5 d-flex justify-content-center admin-form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Enter Email Address"{...register("email", { required: true })} />
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </>
    );
};

export default MakeAdmin;