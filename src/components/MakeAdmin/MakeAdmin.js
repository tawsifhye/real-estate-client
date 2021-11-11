import axios from 'axios';
import { useForm } from 'react-hook-form';
import "./MakeAdmin.css"
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.put(`https://obscure-river-28202.herokuapp.com/users/${data.email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    alert("Admin add successful")
                    reset();
                    return;
                }
                if (res.data.isAdmin) {
                    alert("User already a Admin")
                    return;
                }

                if (!res.registered) {
                    alert("Not Registered! Please resister or sign in using Google for registration")
                    return;
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