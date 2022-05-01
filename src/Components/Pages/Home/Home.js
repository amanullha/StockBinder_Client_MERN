import React from 'react';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import InventoryUsesPrice from '../InventoryUsesPrice/InventoryUsesPrice';
import Spreadsheets from '../Spreadsheets/Spreadsheets';

const Home = () => {
    return (
        <div>
            <InventoryUsesPrice />
            <Spreadsheets />
            <AdvancedFeatures />
        </div>
    );
};

export default Home;