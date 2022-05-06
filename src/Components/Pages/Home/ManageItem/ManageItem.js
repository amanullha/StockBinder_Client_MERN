import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../.firebase.init';

const ManageItem = () => {

    const _id = useParams()._id;

    const [phone, setPhone] = useState({});

    const neqQuantityRef = useRef(0);
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();


    useEffect(() => {


        const getData = async () => {
            await axios.get(`http://localhost:5000/phones/${_id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    email: user?.email
                },

            })
                .then(data => {
                    // console.log(data.data);
                    setPhone(data?.data[0]);
                    console.log(phone);
                })
        }
        getData();





    }, [_id])


    const handleAddQuantity = () => {

        if (parseInt(neqQuantityRef?.current?.value)) {

            const newQuantity = parseInt(neqQuantityRef.current.value) + parseInt(phone?.quantity || 0);

            const newPhone = phone;
            newPhone.quantity = newQuantity;
            setPhone(newPhone);

            const updatedPhone = { quantity: newQuantity, soldItems: phone.soldItems };

            fetch(`http://localhost:5000/phones/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedPhone)
            })
                .then(data => data.json())
                .then(res => {
                    if (res.acknowledged) {

                        // const newPhone = phone;
                        // newPhone.quantity = newQuantity;
                        // setPhone(newPhone);

                        toast("Quantity updated!");
                    }
                })

        }



    }

    const handleDerived = () => {

        if (phone.quantity > 0) {

            const newQuantity = parseInt(phone.quantity) - 1;
            console.log("phone.soldItems  :", phone.soldItems);
            const newSold = parseInt(phone.soldItems || 0) + 1;
            console.log("new sold: ", newSold);

            const updatedPhone = { quantity: newQuantity, soldItems: newSold };

            fetch(`http://localhost:5000/phones/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedPhone)
            })
                .then(data => data.json())
                .then(res => {
                    if (res.acknowledged) {

                        const newPhone = phone;
                        newPhone.quantity = newPhone.quantity - 1;
                        newPhone.soldItems = newPhone.soldItems + 1;

                        setPhone(newPhone);

                        toast("Delivered an Item!");
                    }
                })


        }
    }





    const handleAddNewItems = () => {
        navigate('/add-items');
    }
    const handleToMangeInventory = () => {
        navigate('/inventory');
    }

    return (
        <div className='min-h-[100vh] bg-slate-200 pt-20'>

            <h1 className='text-4xl sm:text-5xl md:text-8xl font-bold tracking-wider text-transparent  bg-clip-text bg-gradient-to-r from-yellow-700 to-green-800 text-center'>Manage Phone Stock</h1>

            <div className='my-20 mx-auto p-5 md:p-12 bg-slate-200  '>

                <div className='flex flex-col sm:flex-row gap-5'>


                    <div className='w-full flex justify-center items-center'>

                        <img className='max-h-[250px] sm:max-h-[600px]   w-full  rounded-lg' src={phone.image} alt="" />
                    </div>


                    <div className="info w-full flex justify-center items-center">

                        <div className='flex flex-col'>

                            <div className='border-l-2 border-yellow-700 pl-3 mb-3'>



                                <h1 className='text-3xl md:text-5xl my-5 font-bold tracking-wide w-full text-yellow-700'>{phone.name}</h1>
                                <h1 className='text-2xl'>Price: <small className='text-3xl text-yellow-800 font-bold ml-2'>$ {phone.price}</small></h1>

                                <h1 className='text-2xl mb-3'>Supplier: {phone.supplier}</h1>
                            </div>

                            <h1 className='text-gray-700 '>{phone.description}</h1>


                            <div className=' my-5 flex items-center justify-start'>

                                <div className='flex flex-col items-center gap-5 mr-5 '>

                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-xl'>Total sold items : </h1>
                                        <h1 className='text-2xl font-bold text-yellow-800'>{phone?.soldItems ? phone.soldItems : "None sold"}</h1>
                                    </div>



                                </div>
                            </div>

                            <div className=' my-5 flex items-center justify-start'>



                                <div className='flex flex-col items-center gap-5 mr-5 '>

                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-xl'>Quantity: </h1>
                                        <h1 className='text-2xl font-bold text-yellow-800'>{phone?.quantity ? phone.quantity : "OUT OF STOCK"}</h1>
                                    </div>

                                    <button onClick={handleDerived} className='active:bg-red-400 active:text-red-900 px-4 py-1 tracking-wider bg-blue-700 text-white font-bold rounded-2xl' >Delivered</button>


                                </div>


                                <div className='flex flex-col items-center gap-5'>

                                    <input ref={neqQuantityRef} className='w-[150px] rounded-2xl text-lg pl-2' placeholder='Add Quantity' type="number" name="" id="" />

                                    <button onClick={handleAddQuantity} className='active:bg-red-400 active:text-red-900 px-4 py-1 tracking-wider bg-blue-700 text-white font-bold rounded-2xl' >Add quantity</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex gap-5 justify-center py-20'>

                    <button onClick={handleAddNewItems} className='px-5 py-1 bg-gray-400 text-blue-800 font-bold rounded-2xl '>Add new Items</button>
                    <button onClick={handleToMangeInventory} className='px-5 py-1 bg-gray-400 text-blue-800 font-bold rounded-2xl '>Manage Inventory</button>
                </div>
            </div >
            <ToastContainer />
        </div >
    );
};

export default ManageItem;