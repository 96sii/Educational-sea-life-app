import Map from '../components/Map';
import NavBar from '../components/NavBar';

const MapContainer = ({animals})=> {

    const animalCoordinates = animals.map(animal => {
        return animal.coordinates;

    })
    return (
        <>
        <NavBar/>
        <p>MAP</p>
        <Map animalCoordinates = {animalCoordinates}/>
        </>
    )
}

export default MapContainer;