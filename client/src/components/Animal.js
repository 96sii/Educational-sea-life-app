import './Animal.css'
import MyGallery from "./MyGallery";
import { Link } from 'react-scroll';

const Animal = ({animals, name, location, diet, species, endangered_level, size, lifespan, fun_facts, images}) => {

    return (
      <>
        <div className="animal-container-outer">
          <h2 id= {name}>{name}</h2>

          <div className="animal-container-inner">
            <div className="animal-container__item">
              <h4 className="animal-container__title">Location:</h4>
              <p className="animal-container__detail">{location}</p>
            </div>

            <div className="animal-container__item">
              <h4 className="animal-container__title">Diet</h4>
              <ul className="animal-container__detail">
                {diet.map((food, index) => {
                  return(
                  <li key={index}>{food},</li>
                  )
                })}
              </ul>
            </div>
            
            <div className="animal-container__item">
              <h4 className="animal-container__title">Species:</h4>
              <p className="animal-container__detail">{species}</p>
            </div>

            <div className="animal-container__item">
              <h4 className="animal-container__title">Conservation Status:</h4>
              <p className="animal-container__detail">{endangered_level}</p>
            </div>
            
            <div className="animal-container__item">
              <h4 className="animal-container__title">Size (metres):</h4>
              <p className="animal-container__detail">{size}</p>
            </div>
            
            <div className="animal-container__item">
              <h4 className="animal-container__title">Lifespan:</h4>
              <p className="animal-container__detail">{lifespan}</p>
            </div>
            
            <div className="animal-container__item">
              <h4 className="animal-container__title">Fun Fact:</h4>
              <p className="animal-container__detail">{fun_facts}</p>
            </div>
            <MyGallery items = {images}/>
          </div> 
        </div>
        <p className="back-to-top"><Link to="Penguin" spy={true} smooth={true} offset={-77}>^ Back to top</Link></p>
      </>
    )
  }
  
export default Animal;