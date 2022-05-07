import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const SinglePhone = ({ phone, handleDeletePhone, fromCall }) => {

    const [onenModal, setOpenModal] = useState(false);


    const { _id, name, description, image, price, quantity, supplier, soldItems } = phone;

    const navigate = useNavigate();

    const handleManageButtonClicked = () => {

        navigate(`/manage-item/${_id}`);
    }


    const handleDeleteButtonClicked = () => {

        setOpenModal(true);

    }

    const handleNoButtonClicked = () => {

        setOpenModal(false);

    }
    const handleYesButtonClicked = () => {

        handleDeletePhone(_id);
        setOpenModal(false);

    }


    return (
        <div className='relative'>
            <Fade bottom>
                <div className='flex items-center gap-5 justify-between m-5 bg-opacity-25 bg-green-700 p-3 rounded-2xl px-5 md:px-8'>

                    <img className='rounded-sm' width={50} height={50} src={image} alt="" />

                    <h1 className='text-xl font-bold' >{name}</h1>
                    <h1 className='text-xl font-bold' >{price}</h1>
                    <h1 className='text-xl font-bold' >{quantity}</h1>
                    {
                        fromCall === "home" ? ""
                            :
                            <h1 className='text-xl font-bold' >{soldItems}</h1>
                    }
                    <h1 className='text-xl font-bold' >{supplier}</h1>

                    {
                        fromCall === "home" ? ""
                            :
                            <div className='flex items-center gap-2'>

                                <button onClick={handleManageButtonClicked} className='bg-blue-700 text-white px-3 py-2 rounded-xl font-bold active:bg-red-300 active:text-red-900 '>Manage</button>


                                <FontAwesomeIcon className='bg-red-200 p-4 rounded-full text-red-600 cursor-pointer active:bg-red-400 active:text-red-900' onClick={handleDeleteButtonClicked} icon={faTrash} />
                            </div>
                    }
                </div>
            </Fade>



            {/* MODAL  */}

            {
                onenModal ?
                    <div className='absolute top-[-10px] z-10 w-full'>

                        <div className="flex items-center justify-center flex-col gap-5 p-4 rounded-2xl duration-200 ease-in-out bg-orange-200 mx-auto max-w-[350px]">
                            <h1 className='text-center text-4xl text-red-500 font-bold tracking-wider'>Are your sure?</h1>
                            <div className='flex gap-4 '>

                                <button onClick={handleYesButtonClicked} className='py-2 px-5 bg-red-700 rounded-2xl text-white font-bold text-2xl'>Yes</button>

                                <button onClick={handleNoButtonClicked} className='py-2 px-5 bg-green-700 rounded-2xl text-white font-bold text-2xl'>No</button>

                            </div>
                        </div>

                    </div>


                    : ""
            }




        </div>
    );
};

export default SinglePhone;