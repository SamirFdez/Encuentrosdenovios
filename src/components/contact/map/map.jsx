import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Container } from "react-bootstrap"
// import { useState } from "react";


export const MapContact = function(){

    // const [ubication, setUbication] = useState({})

    // const location = navigator.geolocation.getCurrentPosition(response => {
        
    //     const {latitude, longitude} = response.coords
    //     console.log(latitude, longitude);

    //     setUbication(response.coords)
    
    
    // });

    // console.log(location);

    const LocationPlumber = [18.489911,-69.8702902]
    
    // const url = `https://www.google.com.do/maps/place/18%C2%B029'36.8%22N+69%C2%B051'40.4%22W/@${LocationPlumber[0]},${LocationPlumber[1]},17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x95b1feaff6e032b2!7e2!8m2!3d18.4935455!4d-69.8612299?hl=en&authuser=0`;

    return(
    <Container>
        <MapContainer style={{width: '100%', height:'45em', marginTop:'1em'}} center={LocationPlumber} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={LocationPlumber}>
                <Popup>
                    <a  href="https://www.google.com.do/maps/place/18%C2%B029'36.8%22N+69%C2%B051'40.4%22W/@18.4887321,-69.8701285,16.76z/data=!4m6!3m5!1s0x0:0x95b1feaff6e032b2!7e2!8m2!3d18.4935455!4d-69.8612299?hl=en&authuser=0" target="_Blank">Go to Google Maps</a>
                    <p>Dirección</p>
                </Popup>
            </Marker>
        </MapContainer>
    </Container>
    
    )
}