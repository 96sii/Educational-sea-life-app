import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimalIcon from './AnimalIconCLass';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import whale from '../assets/images/icon-whale.svg';
import penguin from '../assets/images/icon-penguin.svg';


const whaleIcon = L.icon(new AnimalIcon(whale));
const penguinIcon = L.icon(new AnimalIcon(penguin));



L.Marker.prototype.options.icon = whaleIcon;

const Map = ()=>{
    const position = [51.505, -0.09]
    const whalePosition = [51.505, -0.09]
    const penguinPosition = [90, 45]
  
  return (
    <MapContainer center={position} zoom={"2"} style={{ height: '100vh', width: '100vw' }}
    
    scrollWheelZoom=
    {false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" noWrap={true} 
    
  />
  <Marker position={penguinPosition} icon={penguinIcon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={whalePosition} icon={whaleIcon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  );
}

export default Map;