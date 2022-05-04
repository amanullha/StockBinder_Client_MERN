import React from 'react';
import Slider from 'infinite-react-carousel';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ReactSlider = () => {
    const settings = {
        autoplay: true,
        arrows: false
    };


    return (
        <div className='relative mb-0 '>

            <Slider {...settings} className="z-0">

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/HdNsdY3/adrian-sulyok-In-MD-APxay-I-unsplash.jpg" alt="" />
                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/4VZywgM/bagus-hernawan-k-FDVRCZWwl-A-unsplash.jpg" alt="" />
                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/3mt3Dg8/cardmapr-l-Mc-Hm-tz-R3-I-unsplash.jpg" alt="" />
                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/7CZcpBC/gilles-lambert-pb-l-F8-VWa-PU-unsplash.jpg" alt="" />
                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/DY85f7h/jezael-melgoza-HYQv-V8w-WX18-unsplash.jpg" alt="" />
                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/zSTvN0M/marcin-jozwiak-k-Go-Pcmp-PT7c-unsplash.jpg" alt="" />
                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/WvkFLtC/miryam-leon-Jdpvhn6x-A0w-unsplash.jpg" alt="" />

                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/SsmjfJQ/omid-armin-DIp71kvw-Xh-U-unsplash.jpg" alt="" />

                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/xqxRTrt/priscilla-du-preez-Bjh-Uu6-Bp-UZA-unsplash.jpg" alt="" />

                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/pQQpnjZ/timelab-pro-4-Xi-Fz-GNRTw-unsplash.jpg" alt="" />

                </div>

                <div>
                    <img style={{ width: "100%", maxHeight: "90vh", minHeight: "40vh" }} src="https://i.ibb.co/k27VVkS/wesley-hilario-CNSH-JGEwt-I-unsplash.jpg" alt="" />

                </div>



            </Slider>

            <div className='text-center top-1/3  left-5 sm:left-1/4   z-10 absolute bg-black bg-opacity-5 p-5 rounded-lg'>

                <h1 className='text-md sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-500 '>Car Repair & Services <sub className='text-xs bg-green-300 py-1 px-2 rounded-full text-gray-500 opacity-75'>SAFETY FIRST</sub></h1>
                <div className="ml-2 sm:ml-3 md:ml-10 lg:ml-10 xl:ml-10 my-3 services-facilities">

                    <div className="f-list flex items-center ">
                        <FontAwesomeIcon className=' text-green-500 pr-2' icon={faCheckCircle} />
                        <p className='text-gray-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg'>7 Days Service Warranty
                        </p>

                    </div>
                    <div className="f-list flex items-center ">
                        <FontAwesomeIcon className=' text-green-500 pr-2' icon={faCheckCircle} />
                        <p className='text-gray-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg'>On Time Work Completion
                        </p>

                    </div>
                    <div className="f-list flex items-center ">
                        <FontAwesomeIcon className=' text-green-500 pr-2' icon={faCheckCircle} />


                        <p className='text-gray-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg'>Skilled & Reliable Vehicle Mechanics with Spare Parts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactSlider;