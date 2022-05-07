import React from 'react';
import { Fade, Roll, Zoom } from 'react-reveal';

const Spreadsheets = () => {
    return (
        <div className='bg-blue-100'>
            <div className='py-20  mx-5 lg:mx-10 xl:mx-20'>
                <section className='flex flex-col items-center justify-center'>


                    <div className='flex items-center justify-center w-full'>
                        <hr className='w-1/12'></hr>
                        <Roll top>
                            <h1 className='  text-2xl sm:text-6xl font-extrabold my-20 mx-2'>Sign Up and Upload Your Inventory Spreadsheets</h1>
                            <hr className='w-1/12'></hr>
                        </Roll>


                    </div>


                    <div>
                        <Fade right>
                            <p className='pl-5 text-xl max-w-[1000px] '>
                                We'll configure your inventory, organize your data, and upload it in just a few hours.
                                All for Free for a Limited Time Only (No Credit Card Required). And if you need to expand later, our affordable pricing and flat monthly rate make it easy to control your budget and your inventory.
                            </p>
                        </Fade>

                        <Zoom bottom>
                            <div className='pl-5'>
                                <button className='rounded-3xl my-5 bg-blue-700 text-white px-5 md:px-12 py-3 font-extrabold text-xl tracking-wider '>Take Free Subscriptions</button>
                            </div>
                        </Zoom>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Spreadsheets;