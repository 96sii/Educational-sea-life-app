const Animal = ({animals, name, location, diet, species, endangered_level, size, lifespan, fun_facts}) => {


    return (
      <>
          <h3>{name}</h3>
          <p>Location: {location}</p>
          <ul>
          {diet.map(food => {
            return(
            <li>{food}</li>
            )
          })}
          </ul>
          <p>Species: {species}</p>
          <p>Conservation Status: {endangered_level}</p>
          <p>Size: {size}</p>
          <p>Lifespan: {lifespan}</p>
          <p>Fun Fact: {fun_facts}</p>
          <hr></hr>
          
      </>
    )
  }
  
export default Animal;