import { useContext } from 'react';
import Answer from './Answer';
import { QuizContext } from '../contexts/quiz';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div>
      <div className='question'>{currentQuestion.question}</div>

      <div className='answers'>
        {quizState.answers.map((answerText, index) => (
          <Answer
            key={index}
            index={index}
            answerText={answerText}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={() =>
              dispatch({ type: 'SELECT_ANSWER', payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
