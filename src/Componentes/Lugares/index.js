import './Lugares.css';

import axios from 'axios';

import { useEffect, useState } from 'react';

import Lugar from '../Lugar';

import Mapa from '../Mapa';

import GoogleMapReact from 'google-map-react';
import ListaDeLugares from '../ListaDeLugares';

function Lugares() {


    const [lugares, setLugares] = useState([]);
    const [latitude, setLatitude] = useState(40.7127837);
    const [longitude, setLongitude] = useState(-74.0059413);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        });

    }, []);


    useEffect(() => {
        const getLugares = async (lat, lng) => {
            console.log("key", process.env.REACT_APP_TRAVEL_KEY)
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
                    'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_KEY,
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


    }, [latitude, longitude]);




    return (


        <div className="lugares">


            <ListaDeLugares lugares={lugares} />


            <Mapa
                latitude={latitude}
                longitude={longitude}
                setLatitude={setLatitude}
                setLongitude={setLongitude}

            />


        </div>
    );
}

export default Lugares;