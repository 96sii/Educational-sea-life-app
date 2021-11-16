import '../components/Quiz.css'

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
					<br></br>
					<button id='reset-button' onClick={() => handleQuizReset()}>Try again?</button>
					{questions.map((question) => {
						return (
							<>
								<div className='question-text'>
									{question.questionText}
								</div>
								<div>
									{question.answerOptions.map((answer, index) => {
										if(answer.isCorrect === true && answers.includes(answer.answerText)){
										return (
											<div key={index} className='correct-answer'>
												{answer.answerText} ✅
											</div>
										)} else if (answer.isCorrect === false && answers.includes(answer.answerText)) {
											return (
												<div key={index} className='incorrect-answer'>
													You answered: {answer.answerText} ❌
												</div>
											)
										}
									})}
								</div>
							</>
								)
						})}
					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span className='question-text'>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button className='quiz-button' key={index} id={'button' + (index + 1)} onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>
						))}
                    </div>
				</>
			)}
		</div>
        </>
    );
}
export default Quiz;