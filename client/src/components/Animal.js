import './Animal.css'

const Animal = ({animals, name, location, diet, species, endangered_level, size, lifespan, fun_facts}) => {


    return (
      <div className="animal-item">
          <h2 id= {name}>{name}</h2>
          <p>Location: {location}</p>
          <ul>
          {diet.map((food, index) => {
            return(
            <li key={index}>{food}</li>
            )
          })}
          </ul>
          <p>Species: {species}</p>
          <p>Conservation Status: {endangered_level}</p>
          <p>Size: {size}</p>
          <p>Lifespan: {lifespan}</p>
          <p>Fun Fact: {fun_facts}</p>
          </div>  
    )
  }
  
export default Animal;