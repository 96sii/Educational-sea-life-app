const Quiz = ({loaded, score, questions, currentQuestion, handleAnswerOptionClick, showScore, handleQuizReset}) => {

	if(!loaded){
		return <p>loading...</p>
	}

    return (
        <>
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <button onClick={() => handleQuizReset()}>Reset</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <li key={index}>
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            </li>
						))}
                    </div>
				</>
			)}
		</div>
        </>
    );
}

export default Quiz;