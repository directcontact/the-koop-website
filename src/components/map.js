import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Map = (props) => {
  let DefaultIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [-1, 30],
    popupAnchor: [12, -30],
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <MapContainer
      center={props.coords}
      doubleClickZoom={false}
      closePopupOnClick={false}
      dragging={false}
      zoomDelta={false}
      touchZoom={false}
      scrollWheelZoom={false}
      zoom={17}
      style={{ height: 300, width: '90%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.coords}>
        <Popup>{props.address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
