import React from 'react';
import { Fade, Roll } from 'react-reveal';

const InventoryUsesPrice = () => {
    return (
        <div className='bg-slate-100'>
            <section className='mx-10 lg:mx-15 xl:mx-20 flex flex-col items-center justify-center pb-20 '>



                <div className='flex items-center justify-center w-full'>
                    <hr className='w-1/12'></hr>
                    <Roll bottom>
                        <h1 className=' text-[#128ece] text-2xl sm:text-6xl font-extrabold my-20 mx-2'>Inventory Uses Pricing</h1>
                        <hr className='w-1/12'></hr>
                    </Roll>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>


                    <Fade left>
                        <div className=' shadow-lg bg-white max-w-[350px] pb-8'>

                            <header className='text-center text-3xl bg-[#128ece] py-5 md:py-10 text-white'>Free</header>

                            <div className="main-body text-center py-8">
                                <h1 className='text-[#128ece] text-6xl font-bold tracking-wider'>Free</h1>
                                <small>Monthly</small>
                            </div>

                            <div className="items flex flex-col gap-5 text-gray-700 font-bold tracking-wider text-xl p-5">


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8fbd2" xmlns="http://www.w3.org/2000/svg" class="icon__box" viewBox="0 0 16 15.73" width="16" height="16"><title id="title-626d7d9b8fbd2">icon__box</title><path fill="currentColor" d="M7.47.1L1 2.53a1.52 1.52 0 00-1 1.41v7a1.51 1.51 0 00.83 1.34l6.5 3.25a1.5 1.5 0 001.34 0l6.5-3.25A1.51 1.51 0 0016 11V4a1.5 1.5 0 00-1-1.4L8.53.1a1.49 1.49 0 00-1.06 0zM8 2l6 2.25-6 2.51-6-2.44zm1 11.16V8.51l5-2v4.18z"></path></svg>
                                    <h1>50 Items</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f67e" xmlns="http://www.w3.org/2000/svg" class="icon__location-solid" viewBox="0 0 16 21.33" width="16" height="22"><title id="title-626d7d9b8f67e">icon__location-solid</title><path d="M7.18 20.9C1.12 12.13 0 11.23 0 8a8 8 0 0116 0c0 3.23-1.12 4.13-7.18 12.9a1 1 0 01-1.64 0zM8 11.33A3.33 3.33 0 104.67 8 3.33 3.33 0 008 11.33z" fill="currentColor"></path></svg>
                                    <h1>10 Users</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f7ca" xmlns="http://www.w3.org/2000/svg" class="icon__lines" viewBox="0 0 16 14" width="16" height="14"><title id="title-626d7d9b8f7ca">icon__lines</title><path d="M.57 2.57h14.86A.57.57 0 0016 2V.57a.58.58 0 00-.57-.57H.57A.58.58 0 000 .57V2a.57.57 0 00.57.57zm0 5.72h14.86a.58.58 0 00.57-.58V6.29a.58.58 0 00-.57-.58H.57a.58.58 0 00-.57.58v1.42a.58.58 0 00.57.58zm0 5.71h14.86a.58.58 0 00.57-.57V12a.57.57 0 00-.57-.57H.57A.57.57 0 000 12v1.43a.58.58 0 00.57.57z" fill="currentColor"></path></svg>
                                    <h1>250 Records</h1>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className=' shadow-lg bg-white max-w-[350px]  pb-8'>

                            <header className='text-center text-3xl bg-[#128ece] py-5 md:py-10 text-white'>Small</header>

                            <div className="main-body text-center py-8">
                                <h1 className='text-[#128ece] text-6xl font-bold tracking-wider'>200 BDT</h1>
                                <small>Monthly</small>
                            </div>

                            <div className="items flex flex-col gap-5 text-gray-700 font-bold tracking-wider text-xl p-5">


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8fbd2" xmlns="http://www.w3.org/2000/svg" class="icon__box" viewBox="0 0 16 15.73" width="16" height="16"><title id="title-626d7d9b8fbd2">icon__box</title><path fill="currentColor" d="M7.47.1L1 2.53a1.52 1.52 0 00-1 1.41v7a1.51 1.51 0 00.83 1.34l6.5 3.25a1.5 1.5 0 001.34 0l6.5-3.25A1.51 1.51 0 0016 11V4a1.5 1.5 0 00-1-1.4L8.53.1a1.49 1.49 0 00-1.06 0zM8 2l6 2.25-6 2.51-6-2.44zm1 11.16V8.51l5-2v4.18z"></path></svg>
                                    <h1> 500 Items</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f67e" xmlns="http://www.w3.org/2000/svg" class="icon__location-solid" viewBox="0 0 16 21.33" width="16" height="22"><title id="title-626d7d9b8f67e">icon__location-solid</title><path d="M7.18 20.9C1.12 12.13 0 11.23 0 8a8 8 0 0116 0c0 3.23-1.12 4.13-7.18 12.9a1 1 0 01-1.64 0zM8 11.33A3.33 3.33 0 104.67 8 3.33 3.33 0 008 11.33z" fill="currentColor"></path></svg>
                                    <h1>100 Users</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f7ca" xmlns="http://www.w3.org/2000/svg" class="icon__lines" viewBox="0 0 16 14" width="16" height="14"><title id="title-626d7d9b8f7ca">icon__lines</title><path d="M.57 2.57h14.86A.57.57 0 0016 2V.57a.58.58 0 00-.57-.57H.57A.58.58 0 000 .57V2a.57.57 0 00.57.57zm0 5.72h14.86a.58.58 0 00.57-.58V6.29a.58.58 0 00-.57-.58H.57a.58.58 0 00-.57.58v1.42a.58.58 0 00.57.58zm0 5.71h14.86a.58.58 0 00.57-.57V12a.57.57 0 00-.57-.57H.57A.57.57 0 000 12v1.43a.58.58 0 00.57.57z" fill="currentColor"></path></svg>
                                    <h1>1,000 Records</h1>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade top>
                        <div className=' shadow-lg bg-white max-w-[350px]  pb-8'>

                            <header className='text-center text-3xl bg-[#128ece] py-5 md:py-10 text-white'>Medium</header>

                            <div className="main-body text-center py-8">
                                <h1 className='text-[#128ece] text-6xl font-bold tracking-wider'>4,000 BDT</h1>
                                <small>Monthly</small>
                            </div>

                            <div className="items flex flex-col gap-5 text-gray-700 font-bold tracking-wider text-xl p-5">


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8fbd2" xmlns="http://www.w3.org/2000/svg" class="icon__box" viewBox="0 0 16 15.73" width="16" height="16"><title id="title-626d7d9b8fbd2">icon__box</title><path fill="currentColor" d="M7.47.1L1 2.53a1.52 1.52 0 00-1 1.41v7a1.51 1.51 0 00.83 1.34l6.5 3.25a1.5 1.5 0 001.34 0l6.5-3.25A1.51 1.51 0 0016 11V4a1.5 1.5 0 00-1-1.4L8.53.1a1.49 1.49 0 00-1.06 0zM8 2l6 2.25-6 2.51-6-2.44zm1 11.16V8.51l5-2v4.18z"></path></svg>
                                    <h1>5,000 Items</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f67e" xmlns="http://www.w3.org/2000/svg" class="icon__location-solid" viewBox="0 0 16 21.33" width="16" height="22"><title id="title-626d7d9b8f67e">icon__location-solid</title><path d="M7.18 20.9C1.12 12.13 0 11.23 0 8a8 8 0 0116 0c0 3.23-1.12 4.13-7.18 12.9a1 1 0 01-1.64 0zM8 11.33A3.33 3.33 0 104.67 8 3.33 3.33 0 008 11.33z" fill="currentColor"></path></svg>
                                    <h1>500 Users</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f7ca" xmlns="http://www.w3.org/2000/svg" class="icon__lines" viewBox="0 0 16 14" width="16" height="14"><title id="title-626d7d9b8f7ca">icon__lines</title><path d="M.57 2.57h14.86A.57.57 0 0016 2V.57a.58.58 0 00-.57-.57H.57A.58.58 0 000 .57V2a.57.57 0 00.57.57zm0 5.72h14.86a.58.58 0 00.57-.58V6.29a.58.58 0 00-.57-.58H.57a.58.58 0 00-.57.58v1.42a.58.58 0 00.57.58zm0 5.71h14.86a.58.58 0 00.57-.57V12a.57.57 0 00-.57-.57H.57A.57.57 0 000 12v1.43a.58.58 0 00.57.57z" fill="currentColor"></path></svg>
                                    <h1>1,000 Records</h1>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className=' shadow-lg bg-white max-w-[350px]  pb-8'>

                            <header className='text-center text-3xl bg-[#128ece] py-5 md:py-10 text-white'>Large</header>

                            <div className="main-body text-center py-8">
                                <h1 className='text-[#128ece] text-6xl font-bold tracking-wider'>10,000 BDT</h1>
                                <small>Monthly</small>
                            </div>

                            <div className="items flex flex-col gap-5 text-gray-700 font-bold tracking-wider text-xl p-5">


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8fbd2" xmlns="http://www.w3.org/2000/svg" class="icon__box" viewBox="0 0 16 15.73" width="16" height="16"><title id="title-626d7d9b8fbd2">icon__box</title><path fill="currentColor" d="M7.47.1L1 2.53a1.52 1.52 0 00-1 1.41v7a1.51 1.51 0 00.83 1.34l6.5 3.25a1.5 1.5 0 001.34 0l6.5-3.25A1.51 1.51 0 0016 11V4a1.5 1.5 0 00-1-1.4L8.53.1a1.49 1.49 0 00-1.06 0zM8 2l6 2.25-6 2.51-6-2.44zm1 11.16V8.51l5-2v4.18z"></path></svg>
                                    <h1> 25,000 Items</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f67e" xmlns="http://www.w3.org/2000/svg" class="icon__location-solid" viewBox="0 0 16 21.33" width="16" height="22"><title id="title-626d7d9b8f67e">icon__location-solid</title><path d="M7.18 20.9C1.12 12.13 0 11.23 0 8a8 8 0 0116 0c0 3.23-1.12 4.13-7.18 12.9a1 1 0 01-1.64 0zM8 11.33A3.33 3.33 0 104.67 8 3.33 3.33 0 008 11.33z" fill="currentColor"></path></svg>
                                    <h1>5,000 Users</h1>
                                </div>
                                <hr />


                                <div className='flex gap-5 items-center'>
                                    <svg aria-labelledby="title-626d7d9b8f7ca" xmlns="http://www.w3.org/2000/svg" class="icon__lines" viewBox="0 0 16 14" width="16" height="14"><title id="title-626d7d9b8f7ca">icon__lines</title><path d="M.57 2.57h14.86A.57.57 0 0016 2V.57a.58.58 0 00-.57-.57H.57A.58.58 0 000 .57V2a.57.57 0 00.57.57zm0 5.72h14.86a.58.58 0 00.57-.58V6.29a.58.58 0 00-.57-.58H.57a.58.58 0 00-.57.58v1.42a.58.58 0 00.57.58zm0 5.71h14.86a.58.58 0 00.57-.57V12a.57.57 0 00-.57-.57H.57A.57.57 0 000 12v1.43a.58.58 0 00.57.57z" fill="currentColor"></path></svg>
                                    <h1>50,000 Records</h1>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

            </section>
        </div>
    );
};

export default InventoryUsesPrice;