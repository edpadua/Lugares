import GoogleMapReact from "google-map-react";


const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
];

export default function Mapa() {
  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCMvKyYlfHGqYdzupIw9D_vNtqgBN78SJ8",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
      >
       </GoogleMapReact> 
     
    </div>
  );
}