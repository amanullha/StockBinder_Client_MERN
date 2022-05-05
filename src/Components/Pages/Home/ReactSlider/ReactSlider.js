import React from 'react';
import Slider from 'infinite-react-carousel';
import { useNavigate } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const ReactSlider = () => {
    const settings = {
        autoplay: true,
        arrows: false
    };

    const navigate = useNavigate();
    const handleSingUpClicked = () => {
        navigate('/signup');
    }

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

            <div className='w-full h-full text-center   z-10 absolute bg-black bg-opacity-40 top-0 left-0 flex items-center justify-center'>

                <div className=' sm:w-3/4 sm:mx-0 w-full mx-5 '>

                    <h1 className='text-xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-500 '>Inventory Management
                        Software in the Cloud
                        <sub className='text-xs bg-green-300 py-1 px-2 rounded-full text-gray-500 opacity-75'>SAFETY FIRST</sub>
                    </h1>

                    <div>
                        <p className='text-md md:text-lg mt-5 text-gray-300 w-3/4 mx-auto'>Simple to use, beautifully designed, customizable inventory software system for any business buying and selling goods</p>
                    </div>

                    <div>
                        <button onClick={handleSingUpClicked} className='active:bg-slate-600 mt-5 md:mt-10 md:text-2xl md:px-12 px-5 py-3 bg-yellow-600 rounded-full text-white font-bold md:tracking-widest'>Sing Up-It's Free</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReactSlider;