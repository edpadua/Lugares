import './Lugares.css';

import axios from 'axios';

import { useEffect, useState } from 'react';

import Lugar from '../Lugar';

function Lugares() {


    const [lugares, setLugares] = useState([]);
    const [latitude, setLatidude] = useState(40.7127837);
    const [longitude, setLongitude] = useState(-74.0059413);
    


    useEffect(() => {
        const getLugares = async (lat, lng) => {
            const options = {
                method: 'GET',
                url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
                params: {
                    latitude: lat,
                    longitude: lng,
                    limit: '30',
                    currency: 'USD',
                    distance: '2',
                    open_now: 'false',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': 'aa57a71a86msh797eb071c0f6057p1fdb5ejsn3d7fa6579a8a',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                console.log("response data", response.data);
                setLugares(response.data.data);
            }).catch(function (error) {
                console.error(error);
            });
        };

        getLugares(latitude, longitude);


    }, []);




    return (
        <div>

            {console.log("lugares definitivos", lugares)}

            <p>{process.env.TRAVEL_KEY}</p>
            {lugares.map((lugar, index) =>


                <Lugar lugar={lugar} index={index} />


            )}


        </div>
    );
}

export default Lugares;