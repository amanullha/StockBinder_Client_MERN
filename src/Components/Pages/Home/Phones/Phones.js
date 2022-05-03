import React, { useState } from 'react';
import auth from '../../../../.firebase.init';
import usePhones from '../../../../hooks/usePhones';
import SinglePhone from '../SinglePhone/SinglePhone';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Phones = () => {

    const startingItemPos = 0;
    const numberOfItems = 6;
    const [phones, setPhones] = usePhones(startingItemPos, numberOfItems);
    const [user, loading, error] = useAuthState(auth);



    console.log("user : ", user?.email);

    const handleDeletePhone = (_id) => {

        if (!(user?.uid)) {
            gotError("You haven't permission to do anything!");
            return;
        }

        const restPhones = [];

        for (let phone of phones) {

            if (phone._id === _id && user.email !== phone.user) {

                gotError("You haven't permission to do anything!");
                return;
            }
            else if (phone._id !== _id) {
                restPhones.push(phone);
            }
        }

        fetch(`http://localhost:5000/phones/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast("item deleted successfully!")
                }
            })

        setPhones(restPhones)



    }

    const gotError = (mgs) => {
        toast(mgs)
    }



    return (
        <div>


            <div className='bg-emerald-200 py-10 rounded-md relative'>

                <h1 className='text-center text-4xl font-bold tracking-widest pb-5 text-yellow-700'>Available Phones</h1>

                <div className='flex items-center gap-5 justify-between m-5  p-3'>


                    <h1 className='text-2xl font-bold text-yellow-600' >Phone</h1>
                    <h1 className='text-2xl font-bold text-yellow-600' >Name</h1>
                    <h1 className='text-2xl font-bold text-yellow-600' >Price</h1>
                    <h1 className='text-2xl font-bold text-yellow-600' >Quantity</h1>
                    <h1 className='text-2xl font-bold text-yellow-600' >Supplier</h1>
                    <h1 className='text-2xl font-bold text-yellow-600' >Functions</h1>

                </div>

                <div>
                    {
                        phones.map(phone => <SinglePhone
                            key={phone._id}
                            phone={phone}
                            handleDeletePhone={handleDeletePhone}
                        />)
                    }

                </div>











            </div>


            <ToastContainer />
        </div>
    );
};

export default Phones;