import { Link } from 'react-scroll';


const JumpToMenu = ()=>{
    return(
        <ul>
        <li><Link activeClass="active" to="Penguin" spy={true} smooth={true}>Penguin</Link></li>
        <li><Link to="Whale" spy={true} smooth={true}>Whale</Link></li>
        <li><Link to="Turtle" spy={true} smooth={true}>Turtle</Link></li>
        <li><Link to="Walrus" spy={true} smooth={true}>Walrus</Link></li>
        <li><Link to="Shark" spy={true} smooth={true}>Shark</Link></li>
        <li><Link to="Dolphin" spy={true} smooth={true}>Dolphin</Link></li>
        <li><Link to="Clown Fish" spy={true} smooth={true}>Clown Fish</Link></li>
        <li><Link to="Seals" spy={true} smooth={true}>Seal</Link></li>
      </ul>
    )
}

export default JumpToMenu;