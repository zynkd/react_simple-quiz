import Question from './Question';
import '../index.css';
import { useReducer } from 'react';

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
};

const reducer = (state, action) => {
  if ((action.type = 'NEXT_QUESTION')) {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
};

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state: ', state);

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
