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

const Map = ({animalCoordinates})=>{

    const position = [51.505, -0.09]
    const penguinPosition = [84, 45]
    const whalePositions = [[0, -120],[50, -30], [0, 70]]
    

  
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
    )

  })};
  
  
</MapContainer>
  );
}



export default Map;