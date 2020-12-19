import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// const MapSearch = dynamic(import('../../components/Map'), {
//     ssr: false,
//     loading: () => (
//       <div style={{textAlign: 'center', paddingTop: 20}}>
//         Chargement…
//       </div>
//     )
//   })
  

const Map = (props) => {
    return (
        <MapContainer
            center={props.coords}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 300, width: '90%' }}
            >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.coords} />
        </MapContainer>
    );
};

export default Map;