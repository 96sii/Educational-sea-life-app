import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimalIcon from './AnimalIconCLass';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import whale from '../assets/images/icon-whale.svg';
import penguin from '../assets/images/icon-penguin.svg';
import turtle from '../assets/images/icon-turtle.svg';


const whaleIcon = L.icon(new AnimalIcon(whale));
const penguinIcon = L.icon(new AnimalIcon(penguin));
const turtleIcon = L.icon(new AnimalIcon(turtle));

const Map = ()=>{

    const position = [51.505, -0.09]
    const penguinPosition = [-70, 45]
    const whalePositions = [[0, -120],[50, -30], [0, 70], [83, -10], [-50, -10]]
    const turtlePositions = [[0, 0], [-10, -30], [40, -60], [-20, 110]]
    

  
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
      Penguins are found in Antarctica
    </Popup>
  </Marker>

  {whalePositions.map((position, index) => {
    return(
    <Marker key = {index} position={position} icon={whaleIcon}>
    <Popup>
      Whales can be found in all of the major Oceans
    </Popup>
    </Marker>
    )})}

    {turtlePositions.map((position, index) => {
    return(
    <Marker key = {index} position={position} icon={turtleIcon}>
    <Popup>
      Turtles can be found in coastal waters in every continent apart from Antarctica
    </Popup>
    </Marker>
    )})};
  
  
</MapContainer>
  );
}



export default Map;