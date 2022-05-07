

import axios from 'axios';

import { useState, useEffect } from 'react'



const useToken = user => {

    const [token, setToken] = useState('');

    useEffect(() => {

        const getToken = async () => {
            const email = user?.user?.email;

            if (email) {
                const { data } = await axios.post('http://localhost:5000/login', { email });

                localStorage.setItem('accessToken', data.accessToken);

                setToken(data.accessToken);
            }
        }
        getToken();

    }, [user])

    return [token, setToken];
}

export default useToken;