import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import AnimalAppContainer from "./containers/AnimalAppContainer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import QuizContainer from './containers/QuizContainer';
import ErrorPage from './components/ErrorPage';
import animalsServices from './services/AnimalsServices';
import MapContainer from './containers/MapContainer';

const App = () => {

	const [animals, setAnimals] = useState([]);
	const [questions, setQuestions] = useState(questions);
	const [loaded, setLoaded] = useState(false);	
		
	const defaultImages = [
		{
		  original: './assets/images/gallery-images/ClownFish1.jpeg',
		  thumbnail: './assets/images/gallery-images/ClownFish1.jpeg',
		},
		{
		  original: 'https://picsum.photos/id/1015/1000/600/',
		  thumbnail: 'https://picsum.photos/id/1015/250/150/',
		},
		{
		  original: 'https://picsum.photos/id/1019/1000/600/',
		  thumbnail: 'https://picsum.photos/id/1019/250/150/',
		},
	];

	const [images, setImages] = useState(defaultImages);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const handleQuizReset = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(false);
	}

	useEffect(() => {
		animalsServices.getAnimals()
		.then(animals => setAnimals(animals))
		animalsServices.getQuestions()
		.then(questions => setQuestions(questions))
		.then (() => setLoaded(true))
	}, []);


	console.log(questions);


	return (
    <>
		<div className="App">
			<Router>
				<>
				<Routes>
					<Route exact path="/" element={<Home />}/>
					<Route path="/quiz" element={<QuizContainer 
						loaded={loaded}
						score={score}
						questions={questions}
						currentQuestion={currentQuestion}
						handleAnswerOptionClick={handleAnswerOptionClick}
						showScore={showScore}
						handleQuizReset={handleQuizReset}
					/>}/>
					<Route path="/animals" element = {<AnimalAppContainer 
						items = {images}
						animals = {animals}
					/>}/>
					<Route path="/map" element = {<MapContainer animals = {animals}/>}/>
					<Route element={ErrorPage}/>
				</Routes>
				</>
			</Router>
		</div>
    </>);
}

export default App;
