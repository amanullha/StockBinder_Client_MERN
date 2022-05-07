import React, { useEffect, useState } from 'react';
import auth from '../../../../.firebase.init';
import usePhones from '../../../../hooks/usePhones';
import SinglePhone from '../SinglePhone/SinglePhone';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { Roll } from 'react-reveal';


const Phones = ({ fromCall }) => {

    const startingItemPos = 0;
    const numberOfItems = 6;


    // const [totalPhonesCount, setTotalPhonesCount] = useState();
    const [totalPage, setTotalPage] = useState(0);
    const [totalPhoneInPage, setTotalPhoneInPage] = useState(6);
    const [currentPageNbr, setCurrentPageNbr] = useState(1);

    const [user, loading, error] = useAuthState(auth);


    // load phones from custom hook
    // const [phones, setPhones] = usePhones(currentPageNbr, totalPhoneInPage);

    const [phones, setPhones] = useState([]);



    useEffect(() => {

        axios.get(`https://arcane-oasis-08420.herokuapp.com/phones?currentPageNbr=${currentPageNbr}&totalPhoneInPage=${totalPhoneInPage}`)
            .then(data => setPhones(data.data))

    }, [currentPageNbr, totalPhoneInPage])


    useEffect(() => {
        axios.get('https://arcane-oasis-08420.herokuapp.com/phones-count')
            .then(data => {

                // setTotalPhonesCount(data.data.PhonesCount);

                const totalPhonescount = data.data.phonesCount


                const newPageCount = Math.ceil(totalPhonescount / totalPhoneInPage);
                console.log(" newPageCount: ", newPageCount);
                setTotalPage(newPageCount);

            })
    }, [totalPhoneInPage])



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

        fetch(`https://arcane-oasis-08420.herokuapp.com/phones/${_id}`, {
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


    const navigate = useNavigate();
    const handleToMangeInventory = () => {
        navigate('/inventory');
    }
    if (loading) {
        return <Loading />
    }


    return (
        <div className='mt-0 bg-emerald-700 bg-opacity-20'>


            <div className='mx-5 lg:mx-5 xl:mx-20 pt-5 pb-12 mt-0 relative '>



                <Roll top>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider text-transparent  bg-clip-text bg-gradient-to-r from-yellow-700 to-green-800 text-center'>{fromCall === "manageInventory" ? "Manage Inventory(All Products)" : "Available Phones"}</h1>
                </Roll>
                <div className='flex items-center gap-5 justify-between m-5  p-3'>


                    <h1 className='sm:text-2xl text-lg font-bold text-yellow-600' >Phone</h1>
                    <h1 className='sm:text-2xl text-lg font-bold text-yellow-600' >Name</h1>
                    <h1 className='sm:text-2xl text-lg font-bold text-yellow-600' >Price</h1>
                    <h1 className='sm:text-2xl text-lg font-bold text-yellow-600' >Quantity</h1>
                    {
                        fromCall === "home" ? ""
                            :
                            <h1 className='sm:text-2xl text-lg font-bold text-yellow-600' >Sold</h1>
                    }
                    <h1 className='sm:text-2xl text-lg font-bold text-yellow-600' >Supplier</h1>
                    {
                        fromCall === 'home' ? ""
                            :
                            <h1 className='sm:text-2xl text-lg  font-bold text-yellow-600' >Functions</h1>
                    }

                </div>



                <div>
                    {
                        phones.map(phone => <SinglePhone
                            key={phone._id}
                            phone={phone}
                            handleDeletePhone={handleDeletePhone}
                            fromCall={fromCall}
                        />)
                    }

                </div>



                {
                    fromCall === 'home' ? ""
                        :
                        <div>

                            <div className='flex  mx-5'>
                                <div className='w-full pagination flex items-center justify-between'>
                                    {

                                        [...Array(totalPage).keys()].map(nbr =>
                                            <button onClick={() => setCurrentPageNbr(nbr + 1)} className={`w-full border-2 bg-emerald-400  p-1 text-yellow-900 ${currentPageNbr === nbr + 1 ? "bg-yellow-900 text-green-300" : ""}`}>{nbr + 1}</button>)

                                    }
                                </div>


                                <select onChange={e => setTotalPhoneInPage(e.target.value)} className='ml-2' name="" id="">
                                    <option value="6" selected>6</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="35">35</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                        </div>
                }





                <div className='flex justify-center'>
                    {
                        fromCall === "home" ? <div>
                            <button onClick={handleToMangeInventory} className='rounded-lg bg-green-700 px-5 md:px-12 py-1 font-bold text-2xl active:bg-transparent active:text-yellow-700 active:border-2 my-10 text-emerald-100   '>Mange Inventory <FontAwesomeIcon icon={faAngleRight} /></button>
                        </div> : ""
                    }
                </div>


            </div>


            <ToastContainer />
        </div>
    );
};

export default Phones;