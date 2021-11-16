import Map from '../components/Map';
import NavBar from '../components/NavBar';
import '../components/Map.css'

const MapContainer = ({animals})=> {

    const animalCoordinates = animals.map(animal => {
        return animal.coordinates;

    })
    return (
        <>
        <div className="map-page">
        <NavBar/>
        <Map animalCoordinates = {animalCoordinates}/>
        </div>
        </>
    )
}

export default MapContainer;