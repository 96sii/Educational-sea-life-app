import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimalIcon from './AnimalIconCLass';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import whale from '../assets/images/icon-whale.svg';
import penguin from '../assets/images/icon-penguin.svg';
import turtle from '../assets/images/icon-turtle.svg';
import shark from '../assets/images/icon-shark.svg';
import walrus from '../assets/images/icon-walrus.svg';
import dolphin from '../assets/images/icon-dolphin.svg';
import fish from '../assets/images/icon-fish.svg';
import seal from '../assets/images/icon-seal.svg';


const whaleIcon = L.icon(new AnimalIcon(whale));
const penguinIcon = L.icon(new AnimalIcon(penguin));
const turtleIcon = L.icon(new AnimalIcon(turtle));
const sharkIcon = L.icon(new AnimalIcon(shark));
const walrusIcon = L.icon(new AnimalIcon(walrus));
const dolphinIcon = L.icon(new AnimalIcon(dolphin));
const fishIcon = L.icon(new AnimalIcon(fish));
const sealIcon = L.icon(new AnimalIcon(seal));

const Map = ()=>{

    const position = [51.505, -0.09]
    const penguinPosition = [-70, 45]
    const whalePositions = [[0, -120],[50, -30], [0, 70], [83, -10], [-50, -10]]
    const turtlePositions = [[0, 0], [-10, -30], [40, -60], [-20, 110]]
    const sharkPositions = [[25, -65],[-25, -85], [25, -125], [5, -25], [15,65],[-5, 100], [-15, 155]]
    const walrusPositions = [[55, -155], [70, -60], [80, 120], [75, 15]]
    const dolphinPositions = [[35, -135],[-10, -90], [25, -25], [-15, 5], [10, 90], [10, 135]]
    const fishPositions = [[8, 112], [25, 125], [-4, 130]]
    const sealPositions = [[63, -60], [77, 80], [76, 120], [73, 30]]

  
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
      Whales can be found in all of the major oceans
    </Popup>
    </Marker>
    )})}

      {sharkPositions.map((position, index) => {
        return (
          <Marker key={index} position={position} icon={sharkIcon}>
            <Popup>
              Sharks can be found in all tropical waters
            </Popup>
          </Marker>
        )
      })}

      {walrusPositions.map((position, index) => {
        return (
          <Marker key={index} position={position} icon={walrusIcon}>
            <Popup>
              Walrus live in Pacific, Atlantic and Arctic Oceans
            </Popup>
          </Marker>
        )
      })}

      {dolphinPositions.map((position, index) => {
        return (
          <Marker key={index} position={position} icon={dolphinIcon}>
            <Popup>
              Dolphins can be found in temperate and tropical waters
            </Popup>
          </Marker>
        )
      })}

      {fishPositions.map((position, index) => {
        return (
          <Marker key={index} position={position} icon={fishIcon}>
            <Popup>
              Clown Fish can be found in temperate and tropical waters
            </Popup>
          </Marker>
        )
      })}

    {turtlePositions.map((position, index) => {
    return(
    <Marker key = {index} position={position} icon={turtleIcon}>
    <Popup>
      Turtles can be found in coastal waters in every continent apart from Antarctica
    </Popup>
    </Marker>
    )})}

      {sealPositions.map((position, index) => {
        return (
          <Marker key={index} position={position} icon={sealIcon}>
            <Popup>
              Seals live on both shores of the North Atlantic Ocean
            </Popup>
          </Marker>
        )
      })}
  
  
</MapContainer>
  );
}



export default Map;