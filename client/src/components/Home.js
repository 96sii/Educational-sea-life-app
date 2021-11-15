import './Home.css';
import NavBar from '../components/NavBar';

const Home = () => {

    return (
      <>
        <div className="home">
          <div className="constraint">
              <h1>Sea Animals</h1>
              <h2>Education App</h2>
              <div className="nav-bar-container-home">
                <NavBar/>
              </div>        
          </div>
        </div>
      </>
    )
  };
  
  export default Home;