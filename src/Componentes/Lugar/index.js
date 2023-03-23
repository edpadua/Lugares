import './Lugar.css';


import { FaPhone, FaGlobe, FaStar, FaMoneyBillAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Lugar({ lugar, index }) {

    const iconColor = "#700c0c"

    return (
        <div>

            <div id={index} className="lugarCard" key={index}>

            { lugar.name ?
                <>
                <img src={lugar.photo ? lugar.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} />

                <div className="lugarTituloBox">
                    <div className="lugarTitulo">
                        <h2>{lugar.name}</h2>
                    </div>
                </div>

                <div className='lugar'>

                    {lugar.price_level ? <> <p><FaMoneyBillAlt style={{ color: iconColor }} /> {lugar.price_level}</p></>
                        : (<></>)
                    }
                    {lugar.rating ? <> <p><FaStar style={{ color: iconColor }} /> {lugar.rating}</p></>
                        : (<></>)
                    }
                    {lugar.address ? <><p><FaMapMarkerAlt style={{ color: iconColor }} /> {lugar.address}</p></>
                        : (<></>)
                    }
                    {lugar.phone ? <><p><FaPhone style={{ color: iconColor }} /> {lugar.phone}</p></>
                        : (<></>)
                    }
                    {lugar.website ? <><FaGlobe style={{ color: iconColor }} /><a href={lugar.website}> Website</a></>
                        : (<></>)
                    }



                </div>
                </>: (<></>)
                }
            </div>


        </div>
    );
}

export default Lugar;