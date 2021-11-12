import Quiz from "../components/Quiz";

const QuizContainer = ({score, questions, currentQuestion, handleAnswerOptionClick, showScore, handleQuizReset}) => {

    return (
        <>
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