import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [34, 46],
    iconAnchor: [17, 46]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ()=>{
    const position = [51.505, -0.09]
  
  return (
    <MapContainer center={position} zoom={"2.5"} style={{ height: '100vh', width: '100vw' }}
    
    scrollWheelZoom=
    {false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" noWrap={true} 
    
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  );
}

export default Map;