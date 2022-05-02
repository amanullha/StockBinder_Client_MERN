import React from 'react';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import ImprovePerformance from '../ImporvePerformance/ImprovePerformance';
import InventoryUsesPrice from '../InventoryUsesPrice/InventoryUsesPrice';
import Spreadsheets from '../Spreadsheets/Spreadsheets';

const Home = () => {
    return (
        <div>
            <InventoryUsesPrice />
            <Spreadsheets />
            <AdvancedFeatures />
            <ImprovePerformance />
        </div>
    );
};

export default Home;