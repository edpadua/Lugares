import './Lugar.css';

function Lugar({ lugar, index }) {
    return (
        <div>

            <div id={index} className="lugarCard" key={index}>

                <div>

                    <div >

                        <h2>{lugar.name}</h2>
                        <img src={lugar.photo ? lugar.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} />
                        <p>Preço {lugar.price_level}</p>
                        <p>Ranking{lugar.ranking}</p>
                        <p>Phone{lugar.phone}</p>
                        <p>Website{lugar.website}</p>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Lugar;