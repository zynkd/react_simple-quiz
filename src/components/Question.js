import { useContext } from 'react';
import Answer from './Answer';
import { QuizContext } from '../contexts/quiz';

const Question = () => {
  const [quizState] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div>
      <div className='question'>{currentQuestion.question}</div>

      <div className='answers'>
        {quizState.answers.map((answer, index) => (
          <Answer key={index} answerText={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
