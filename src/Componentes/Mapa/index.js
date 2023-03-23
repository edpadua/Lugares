import GoogleMapReact from "google-map-react";


        

export default function Mapa({ latitude, longitude, setLatitude, setLongitude }) {
    return (
        <div className="mapa_lugares" >
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
                    language: "en",
                    region: "US"
                }}
                center={{ lat: latitude, lng: longitude }}
                defaultZoom={15}
                onChange={(e) => {
                    setLatitude(e.center.lat);
                    setLongitude(e.center.lng);
                }}
            >
            </GoogleMapReact>
        </div>
     
  
  );
}