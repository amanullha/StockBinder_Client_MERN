import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import SocialAuthentication from "../SocialAuthentication/SocialAuthentication";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../.firebase.init";
import { ToastContainer } from "react-toastify";



const SignUp = () => {

    let pageError;
    // React Firebase Hook-> useCreateUserWithEmailAndPassword

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // React firebase hook-> update profile info
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // React firebase hook-> send email verification
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    // React form 
    const { register, handleSubmit, formState: { errors } } = useForm();


    if (createError || updateError) {
        pageError = <p className='text-sm text-red-500'>{createError?.message}{updateError?.message}</p>;
    }
    else {
        pageError = "";
    }


    // Redirect to the last page
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }


    const onSubmit = async (data) => {

        await createUserWithEmailAndPassword(data.Email, data.Password);
        pageError = <p className='text-sm text-green-700'>Registered successfully!</p>;
        handleUpdatProfile(data.Name);
        sendEmailVerification(data.Email);

    }
    // React firebase hook-> useSendEmailVerification
    const handleSendEmailVerification = async (email) => {
        await sendEmailVerification(email);

    }
    const handleUpdatProfile = async (name) => {
        await updateProfile({ displayName: name });

    }

    const navigate = useNavigate();

    const handleToSingIn = () => {
        navigate('/login')
    }
    const handleToForgetPassword = () => {
        navigate('/forget-password')
    }


    return (
        <div>
            <div className="flex justify-center">

                <div className=" rounded-lg mx-3 w-full sm:w-3/4 md:w-1/2  bg-black flex flex-col  justify-center items-center mt-20 p-5">

                    <h1 className="text-4xl text-white py-10">Register yourself</h1>
                    <hr className="text-white bg-white w-full"></hr>

                    <form className="  p-3 md:p-5 bg-black bg-opacity-25 mt-10  flex flex-col gap-5  w-full mx-5 sm:w-3/4 md:w-3/4 lg:w-3/4" onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Enter your Name" className="text-xl py-1 w-full border-b-2 pl-2" {...register("Name", { required: true })} />
                        {errors.Name?.type === 'required' && <small className="text-red-700 left-0">Name is required</small>}

                        <input type='email' placeholder="Enter your Email" className="text-xl py-1 w-full border-b-2 pl-2" {...register("Email", { required: true })} />
                        {errors.Email?.type === 'required' && <small className="text-red-700 left-0">Email is required</small>}

                        <input type='password' placeholder="Enter your Password" className="text-xl py-1 w-full border-b-2 pl-2" {...register("Password", { required: true })} />
                        {errors.Password?.type === 'required' && <small className="text-red-700 left-0">Password is required</small>}

                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <input className=" mr-2" type="checkbox" name="keepSave" id="" />
                                <h1 className="text-white">Remember me</h1>
                            </div>
                            <div>
                                <h1 onClick={handleToForgetPassword} className="text-yellow-600 cursor-pointer active:text-red-500">Forget password?</h1>
                            </div>
                        </div>

                        <div>
                            {pageError}
                        </div>
                        <input className="bg-blue-700 text-white w-full py-1 font-bold tracking-wider text-2xl rounded-lg" type="submit" value="Sing Up" />
                    </form>

                    
                    <div className="flex items-center gap-2 mb-10">
                        <h1 className="text-white">Do you have an account ?</h1>
                        <h1 onClick={handleToSingIn} className="active:text-red-400 cursor-pointer text-xl text-yellow-200">Sing In</h1>
                    </div>

                    <SocialAuthentication />
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SignUp;