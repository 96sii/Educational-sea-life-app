import Quiz from "../components/Quiz";
import NavBar from '../components/NavBar';

const QuizContainer = ({score, questions, currentQuestion, handleAnswerOptionClick, showScore, handleQuizReset}) => {

    return (
        <>
            <NavBar/>
            <h1>QUIZ</h1>
            <Quiz
                score={score}
                questions={questions}
                currentQuestion={currentQuestion}
                handleAnswerOptionClick={handleAnswerOptionClick}
                showScore={showScore}
                handleQuizReset={handleQuizReset}
            />
        </>
    )
}

export default QuizContainer;