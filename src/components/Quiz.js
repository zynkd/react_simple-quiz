import Question from './Question';
import '../index.css';
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log('state: ', quizState);

  return (
    <div className='quiz'>
      <div className='score'>Questions 1/8</div>
      <Question />
      <div
        className='next-button'
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        Next question
      </div>
    </div>
  );
};

export default Quiz;
