import React from 'react';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import ImprovePerformance from '../ImporvePerformance/ImprovePerformance';
import InventoryUsesPrice from '../InventoryUsesPrice/InventoryUsesPrice';
import Phones from '../Phones/Phones';
import Spreadsheets from '../Spreadsheets/Spreadsheets';


const Home = () => {
    return (
        <div>
            <Phones />
            <InventoryUsesPrice />
            <Spreadsheets />
            <AdvancedFeatures />
            <ImprovePerformance />
        </div>
    );
};

export default Home;