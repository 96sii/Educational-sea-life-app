import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import QuizContainer from '../containers/QuizContainer';
import './JumpToMenu.css';


const JumpToMenu = ()=>{
    return(
        <>
        <ul className="jump-to-menu">
        <h3>Jump To:</h3>
        <li className="list-item"><Link activeClass="active" to="Penguin" spy={true} smooth={true}>Penguin</Link></li>
        <li className="list-item"><Link to="Whale" spy={true} smooth={true}>Whale</Link></li>
        <li className="list-item"><Link to="Turtle" spy={true} smooth={true}>Turtle</Link></li>
        <li className="list-item"><Link to="Walrus" spy={true} smooth={true}>Walrus</Link></li>
        <li className="list-item"><Link to="Shark" spy={true} smooth={true}>Shark</Link></li>
        <li className="list-item"><Link to="Dolphin" spy={true} smooth={true}>Dolphin</Link></li>
        <li className="list-item"><Link to="Clown Fish" spy={true} smooth={true}>Clown Fish</Link></li>
        <li className="list-item"><Link to="Seals" spy={true} smooth={true}>Seal</Link></li>
        <li className="quiz-link"><NavLink to="/quiz">Quiz</NavLink></li>
      </ul>
      </>
    )
}

export default JumpToMenu;