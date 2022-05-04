import axios from 'axios';
import React, { useEffect, useState } from 'react';

const usePhones = (currentPageNbr, totalPhoneInPage) => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/phones')
            .then(data => setPhones(data.data))

    }, [])
    return [phones, setPhones];
};

export default usePhones;