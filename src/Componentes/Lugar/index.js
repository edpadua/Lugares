import './Lugar.css';


import { FaPhone, FaGlobe, FaStar, FaMoneyBillAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Lugar({ lugar, index }) {
    return (
        <div>

            <div id={index} className="lugarCard" key={index}>





                <div className="lugarTitulo">
                    <h2>{lugar.name}</h2>
                </div>

                <img src={lugar.photo ? lugar.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} />

                <div className='lugar'>

                    {lugar.price_level ? <> <p><FaMoneyBillAlt /> {lugar.price_level}</p></>
                        : (<></>)
                    }
                    {lugar.rating ? <> <p><FaStar /> {lugar.rating}</p></>
                        : (<></>)
                    }
                    {lugar.address ? <><p><FaMapMarkerAlt /> {lugar.address}</p></>
                        : (<></>)
                    }
                    {lugar.phone ? <><p><FaPhone /> {lugar.phone}</p></>
                        : (<></>)
                    }
                    {lugar.website ? <><FaGlobe /><a href={lugar.website}> Website</a></>
                        : (<></>)
                    }



                </div>

            </div>


        </div>
    );
}

export default Lugar;