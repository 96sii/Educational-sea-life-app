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

  // quiz
  const questions = [
		{
			questionText: 'Where do sharks live?',
			answerOptions: [
				{ answerText: 'Warm tropical waters', isCorrect: true },
				{ answerText: 'The arctic', isCorrect: false },
				{ answerText: 'Antarctica', isCorrect: false },
				{ answerText: 'Coral Reefs', isCorrect: false },
			],
		},
		{
			questionText: 'What do seals like to eat?',
			answerOptions: [
				{ answerText: 'Algae', isCorrect: false },
				{ answerText: 'Sand Eels and Cod', isCorrect: true },
				{ answerText: 'Clams', isCorrect: false },
				{ answerText: 'Worms', isCorrect: false },
			],
		},
		{
			questionText: 'How long can a Clown Fish live?',
			answerOptions: [
				{ answerText: '90 - 100 years', isCorrect: false },
				{ answerText: '40 - 60 years', isCorrect: false },
				{ answerText: '25 - 35 years', isCorrect: false },
				{ answerText: '6 - 10 years', isCorrect: true },
			],
		},
		{
			questionText: 'What type of animal is a whale?',
			answerOptions: [
				{ answerText: 'Fish', isCorrect: false },
				{ answerText: 'Mammal', isCorrect: true },
				{ answerText: 'Bird', isCorrect: false },
				{ answerText: 'Reptile', isCorrect: false },
			],
		},
		{
			questionText: 'What are a walruses natural predators?',
			answerOptions: [
				{ answerText: 'Sharks', isCorrect: false },
				{ answerText: 'Penguins', isCorrect: false },
				{ answerText: 'Seals', isCorrect: false },
				{ answerText: 'Orcas and Polar Bears', isCorrect: true},
			],
		},
		{
			questionText: 'How big can an Emperor Penguin grow?',
			answerOptions: [
				{ answerText: '1.1 - 1.3m', isCorrect: true },
				{ answerText: '13 - 30cm', isCorrect: false },
				{ answerText: '7cm', isCorrect: false },
				{ answerText: '2.6 - 3.7m', isCorrect: false},
			],
		},
		{
			questionText: 'How fast can a seal swim?',
			answerOptions: [
				{ answerText: '1 mph', isCorrect: false },
				{ answerText: '5 mph', isCorrect: false },
				{ answerText: '22 mph', isCorrect: true },
				{ answerText: '70 mph', isCorrect: false},
			],
		},
		{
			questionText: 'What are a turtles favourite colours?',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Red, yellow and orange', isCorrect: true },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Green', isCorrect: false},
			],
		}
	];

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

  useEffect(()=>{
    animalsServices.getAnimals()
    .then(animals => setAnimals(animals))
  }, []);

  return (
    <>
    <div>
      <Router>
      <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/quiz" element={<QuizContainer 
          score={score}
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
          showScore={showScore}
		  handleQuizReset={handleQuizReset}
        />}/>
        <Route path="/animals" element = {<AnimalAppContainer animals = {animals}/>}/>
		<Route path="/map" element = {<MapContainer />}/>
        <Route element={ErrorPage}/>
      </Routes>
      </>
    </Router>
    </div>


    </>

    
  );
}

export default App;
