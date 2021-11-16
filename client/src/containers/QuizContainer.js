import Quiz from "../components/Quiz";
import NavBar from '../components/NavBar';
import '../components/QuizContainer.css'

const QuizContainer = ({loaded, score, questions, currentQuestion, handleAnswerOptionClick, answers, showScore, handleQuizReset}) => {

    return (
        <div className='quiz-page'>
            <NavBar/>
            <div className='quiz-container'>
            <h1 id='quiz-title'>QUIZ</h1>
            <Quiz
                loaded={loaded}
                score={score}
                questions={questions}
                currentQuestion={currentQuestion}
                handleAnswerOptionClick={handleAnswerOptionClick}
                showScore={showScore}
                answers={answers}
                handleQuizReset={handleQuizReset}
            />
            </div>
        </div>
    )
}

export default QuizContainer;