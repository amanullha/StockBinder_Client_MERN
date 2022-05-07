import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Slide } from 'react-reveal';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../.firebase.init';


const AddItems = () => {

    const [user, loading, error] = useAuthState(auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {


        if (user?.uid) {

            data.user = user?.email;
            data.soldItems = 0;

            // add items to the db
            fetch('https://arcane-oasis-08420.herokuapp.com/phones', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })
                .then(res => res.json())
                .then(data => {
                    toast("New Item added! ")

                })

        }
        else {
            toast("You haven't permission to add items ")
        }






    }







    return (
        <div className='py-20 flex flex-col justify-center items-center mx-5 lg:mx-10 xl:mx-20'>
            <Slide top>


                <div className='w-3/4 sm:w-8/12 max-w-[700px]   bg-black bg-opacity-90 py-16 px-16 md:px-10 rounded-lg'>

                    <h1 className='text-center text-3xl md:text-5xl pb-10 font-bold text-green-600  ' >Add new item to the Inventory</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                        <div className='flex flex-col '>
                            <label className='py-2 text-white' htmlFor="name">Product Name</label>
                            <input className=' focus:outline-none px-2 py-1 text-xl bg-slate-200 ' placeholder='Enter your product name' {...register('name', { required: true })} />
                            {errors.name && <p className='text-red-500'> Name is required.</p>}
                        </div>

                        <div className='flex flex-col '>
                            <label className='py-2 text-white' htmlFor="price">Product Price</label>
                            <input className=' focus:outline-none px-2 py-1 text-xl bg-slate-200 ' placeholder='Product price' {...register('price', { required: true })} />
                            {errors.price && <p className='text-red-500'>Price is required.</p>}
                        </div>

                        <div className='flex flex-col '>
                            <label className='py-2 text-white' htmlFor="quantity">Product quantity</label>
                            <input className=' focus:outline-none px-2 py-1 text-xl bg-slate-200 ' placeholder='Enter your quantity' {...register('quantity', { required: true })} />
                            {errors.quantity && <p className='text-red-500'>Product quantity is required.</p>}
                        </div>

                        <div className='flex flex-col '>
                            <label className='py-2 text-white' htmlFor="supplier">Supplier Name</label>
                            <input className=' focus:outline-none px-2 py-1 text-xl bg-slate-200 ' placeholder='Enter supplier name' {...register('supplier', { required: true })} />
                            {errors.supplier && <p className='text-red-500'>Supplier is required.</p>}
                        </div>

                        <div className='flex flex-col '>
                            <label className='py-2 text-white' htmlFor="image">Image link</label>
                            <input className=' focus:outline-none px-2 py-1 text-xl bg-slate-200 ' placeholder='Enter image link' {...register('image', { required: true })} />
                            {errors.image && <p className='text-red-500'>Image link is required.</p>}
                        </div>

                        <div className='flex flex-col '>
                            <label className='py-2 text-white' htmlFor="description">Product description</label>
                            <textarea className=' focus:outline-none px-2 py-1 text-xl bg-slate-200 ' placeholder='Enter product description' {...register('description', { required: true })} />
                            {errors.description && <p className='text-red-500'>Description required.</p>}
                        </div>


                        <input className='px-5 py-2 font-bold text-xl md:text-2xl tracking-wide bg-blue-700 text-white rounded-2xl active:text-red-400 cursor-pointer' type="submit" value="Add Item" />
                    </form>


                </div>
            </Slide>
            <ToastContainer />
        </div>
    );
};

export default AddItems;