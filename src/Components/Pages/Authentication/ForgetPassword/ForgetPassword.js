import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../../.firebase.init';
import Loading from '../../Loading/Loading';

const ForgetPassword = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const onSubmit = data => {

        sendPasswordResetEmail(data.Email);
        toast("Password reset link send!")


        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
    if (sending) {
        return <Loading />
    }


    return (
        <div>
            <div className="flex justify-center">

                <div className=" rounded-lg mx-3 w-full sm:w-3/4 md:w-1/2  bg-black flex flex-col  justify-center items-center my-20 p-5">
                    <h1 className="text-center text-4xl text-white py-10">Enter you email and get password reset link</h1>
                    <hr className="text-white bg-white w-full"></hr>

                    <form className="  p-3 md:p-5 bg-black bg-opacity-25 my-20 flex flex-col gap-5  w-full mx-5 sm:w-3/4 md:w-3/4 lg:w-3/4" onSubmit={handleSubmit(onSubmit)}>

                        <input type='email' placeholder="Enter your Email" className="text-xl py-1 w-full border-b-2 pl-2" {...register("Email", { required: true })} />
                        {errors.Email?.type === 'required' && <small className="text-red-700 left-0">Email is required</small>}




                        <input className="bg-blue-700 text-white w-full py-1 font-bold tracking-wider text-2xl rounded-lg" type="submit" value="LogIn" />
                    </form>

                </div>


            </div>

            <ToastContainer />
        </div>
    );
};

export default ForgetPassword;