import { faArrowCircleLeft, faArrowRight, faCarSide, faPeopleGroup, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AdvancedFeatures = () => {
    return (
        <div className='bg-green-700 bg-opacity-40'>

            <section className=" flex flex-col justify-center items-center py-20">
                <header>
                    <h1 className='text-3xl md:text-6xl text-center font-bold mb-12'>Advanced features made simple</h1>
                    <h1 className='text-xl text-center mt-3 mb-12'>Use cutting-edge automation and advanced routes to manage any warehouse.
                    </h1>
                </header>

                <div className='flex flex-col md:flex-row gap-8 '>

                    <div className='flex flex-col items-center justify-evenly'>
                        <div className='flex gap-5 items-center justify-center'>
                            <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faCarSide} />
                            <FontAwesomeIcon className='text-2xl' icon={faArrowRight} />

                            <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faPeopleGroup} />


                        </div>

                        <div>Drop-Shipping</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex gap-5 items-center justify-center'>
                            <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faPeopleGroup} />
                            <FontAwesomeIcon className='text-2xl' icon={faArrowRight} />
                            <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faPeopleGroup} />

                        </div>
                        <div>Cross-docking</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex gap-5 items-center justify-center'>
                            <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faWarehouse} />
                            <FontAwesomeIcon className='text-2xl' icon={faArrowRight} />
                            <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faWarehouse} />
                        </div>
                        <div>Multi-warehouse</div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default AdvancedFeatures;