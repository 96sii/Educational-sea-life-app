const Quiz = ({score, questions, currentQuestion, handleAnswerOptionClick, showScore, handleQuizReset}) => {

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
						{questions[currentQuestion].answerOptions.map((answerOption) => (
                            <>
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            </>
						))}
                    </div>
				</>
			)}
		</div>
        </>
    );
}

export default Quiz;