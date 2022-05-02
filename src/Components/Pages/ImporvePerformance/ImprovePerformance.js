import React from 'react';

const ImprovePerformance = () => {
    return (
        <div>
            <div className='flex justify-evenly items-center flex-col md:flex-row bg-slate-200 py-20'>


                <div className='p-5  md:w-1/2 w-full'>
                    <h1 className='text-3xl md:text-6xl font-bold tracking-wider mb-5'>Improve performance & process time</h1>
                    <h1 className='text-xl font-bold mb-5'>
                        Better organize your warehouse with the stockBinder inventory system.

                    </h1>
                    <p>
                        Get the most efficient stocking method and improve all your internal operations. Odoo's double-entry inventory has no stock input, output or transformation. Instead, all operations are stock moves between locations.
                    </p>

                </div>

                <div className='p-5 md:w-1/2 w-full'>

                    <iframe className='w-full ' height="400" src="https://www.youtube.com/embed/Vp5xqQOWLzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

            </div>
        </div>
    );
};

export default ImprovePerformance;