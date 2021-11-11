const Animal = ({animals, name, location, diet, species, endangered_level, size, lifespan, fun_facts}) => {


    return (
      <>
          <p>{name}</p>
          <p>{location}</p>
          <ul>
          {diet.map(food => {
            return(
            <li>{food}</li>
            )
          })}
          </ul>
          <p>{species}</p>
          <p>{endangered_level}</p>
          <p>{size}</p>
          <p>{lifespan}</p>
          <p>{fun_facts}</p>
          
      </>
    )
  }
  
export default Animal;