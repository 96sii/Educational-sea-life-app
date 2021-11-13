import Map from '../components/Map';

const MapContainer = ({animals})=> {

    const animalCoordinates = animals.map(animal => {
        return animal.coordinates;

    })
    return (
        <>
        <p>MAP</p>
        <Map animalCoordinates = {animalCoordinates}/>
        </>
    )
}

export default MapContainer;