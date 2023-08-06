const Answer = ({
  answerText,
  onSelectAnswer,
  index,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ['A', 'B', 'C', 'D'];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
  const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';

  // Disabling answers after user clicks (pointer-events: none;)
  const disabledClass = currentAnswer ? 'disabled-answer' : '';

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={onSelectAnswer}
    >
      <div className='answer-letter'>{letterMapping[index]}</div>
      <div className='answer-text'>{answerText}</div>
    </div>
  );
};

export default Answer;
