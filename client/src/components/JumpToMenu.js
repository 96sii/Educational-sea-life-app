import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import QuizContainer from '../containers/QuizContainer';
import './JumpToMenu.css';


const JumpToMenu = ()=>{
    return(
        <>
        <div className="container-menu-jump-to">
          <h3>Jump to</h3>
          
          <ul className="menu-jump-to">
            <li className="list-item"><Link activeClass="active" to="Penguin" spy={true} smooth={true} offset={-77}>Penguin</Link></li>
            <li className="list-item"><Link to="Whale" spy={true} smooth={true} offset={-59}>Whale</Link></li>
            <li className="list-item"><Link to="Turtle" spy={true} smooth={true} offset={-59}>Turtle</Link></li>
            <li className="list-item"><Link to="Walrus" spy={true} smooth={true} offset={-59}>Walrus</Link></li>
            <li className="list-item"><Link to="Shark" spy={true} smooth={true} offset={-59}>Shark</Link></li>
            <li className="list-item"><Link to="Dolphin" spy={true} smooth={true} offset={-59}>Dolphin</Link></li>
            <li className="list-item"><Link to="Clown Fish" spy={true} smooth={true} offset={-59}>Clown Fish</Link></li>
            <li className="list-item"><Link to="Seals" spy={true} smooth={true} offset={-59}>Seal</Link></li>
            <li className="quiz-link"><NavLink to="/quiz">Quiz</NavLink></li>
          </ul>
        </div>
      </>
    )
}

export default JumpToMenu;