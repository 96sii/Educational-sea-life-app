const Quiz = ({loaded, score, questions, currentQuestion, handleAnswerOptionClick, answers, showScore, handleQuizReset}) => {

	if(!loaded){
		return <p>loading...</p>
	}
	console.log(answers)

    return (
        <>
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					{questions.map((question) => {
						return (
							<>
								<div className='question-text'>
									{question.questionText}
								</div>
								<div>
									{question.answerOptions.map((answer) => {
										if(answer.isCorrect === true){
										return (
											<div className='correct-answer'>
												{answer.answerText} ✅
											</div>
										)} else if (answer.isCorrect === false && answers.includes(answer.answerText)) {
											return (
												<div className='incorrect-answer'>
													You answered: {answer.answerText} ❌
												</div>
											)
										}
									})}
								</div>
							</>
								)
						})}
					

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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>
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