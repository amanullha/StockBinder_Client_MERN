import React from 'react';

const Spreadsheets = () => {
    return (
        <div className='py-20 bg-blue-100'>
            <section className='flex flex-col items-center justify-center'>


                <div className='flex items-center justify-center w-full'>
                    <hr className='w-1/12'></hr>
                    <h1 className='  text-2xl sm:text-6xl font-extrabold my-20 mx-2'>Sign Up and Upload Your Inventory Spreadsheets</h1>
                    <hr className='w-1/12'></hr>
                </div>


                <div>
                    <p className='pl-5 text-xl max-w-[1000px] '>
                        We'll configure your inventory, organize your data, and upload it in just a few hours.
                        All for Free for a Limited Time Only (No Credit Card Required). And if you need to expand later, our affordable pricing and flat monthly rate make it easy to control your budget and your inventory.
                    </p>

                    <div className='pl-5'>
                        <button className='rounded-3xl my-5 bg-blue-700 text-white px-5 md:px-12 py-3 font-extrabold text-xl tracking-wider '>Take Free Subscriptions</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Spreadsheets;