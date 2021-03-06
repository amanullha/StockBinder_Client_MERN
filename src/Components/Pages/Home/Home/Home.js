import React from 'react';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import ImprovePerformance from '../ImporvePerformance/ImprovePerformance';
import InventoryUsesPrice from '../InventoryUsesPrice/InventoryUsesPrice';
import Phones from '../Phones/Phones';
import ReactSlider from '../ReactSlider/ReactSlider';
import Spreadsheets from '../Spreadsheets/Spreadsheets';


const Home = () => {



    return (
        <div className='scrollSmooth	'>
            <ReactSlider />
            <Phones
                fromCall="home" />
            <InventoryUsesPrice />
            <Spreadsheets />
            <AdvancedFeatures />
            <ImprovePerformance />
        </div>
    );
};

export default Home;