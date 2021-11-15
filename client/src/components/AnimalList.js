import Animal from "./Animal";
import MyGallery from "./MyGallery";

const AnimalList = ({animals})=>{

    return(
        <div className="animal-wrapper">
            {animals.map((animal, index) => {
                return(
                    <>
                        <Animal
                        key = {index}
                        name = {animal.name}
                        location = {animal.location}
                        diet = {animal.diet}
                        species = {animal.species}
                        endangered_level = {animal.endangered_level}
                        size = {animal.size}
                        lifespan = {animal.lifespan}
                        fun_facts = {animal.fun_facts}
                        />
                        <MyGallery items = {animal.images}/>
                    </>
                )
            })}
        </div>
    )

}



export default AnimalList;