import Animal from "./Animal";

const AnimalList = ({animals})=>{

    return(
        <div className="animal-wrapper">
            {/* <h1>Sea Animals</h1> */}
            {animals.map((animal, index) => {
                return(
                    <div key={index}>
                        <Animal
                        name = {animal.name}
                        location = {animal.location}
                        diet = {animal.diet}
                        species = {animal.species}
                        endangered_level = {animal.endangered_level}
                        size = {animal.size}
                        lifespan = {animal.lifespan}
                        fun_facts = {animal.fun_facts}
                        images = {animal.images}
                        />
                        
                    </div>
                )
            })}
        </div>
    )

}



export default AnimalList;