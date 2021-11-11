import Animal from "./Animal";

const AnimalList = ({animals})=>{

    return(
        <div className="animal-wrapper">
            {animals.map(animal => {
                return(
                    <Animal
                    name = {animal.name}
                    location = {animal.location}
                    />
                )
            })}
        </div>
    )

}



export default AnimalList;