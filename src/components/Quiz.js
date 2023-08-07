import Question from './Question';
import '../index.css';
import { useContext, useEffect } from 'react';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const apiURL =
    'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple&encode=url3986';
  useEffect(() => {
    // Runs on every re-render, but returns right away, until we clear
    // the `questions` array at the end of the Quiz ("NEXT QUESTION" button)
    if (quizState.questions.length !== 0) {
      return;
    }

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'LOADED_QUESTIONS', payload: data.results });
      });
  });

  return (
    <div className='quiz'>
      {/* Rendering Results page */}
      {quizState.showResults && (
        <div className='results'>
          <div className='congratulations'>Congratulations</div>
          <div className='results-info'>
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCounter} of{' '}
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            className='next-button'
            onClick={() => dispatch({ type: 'RESTART' })}
          >
            Restart
          </div>
        </div>
      )}

      {/* Rendering questions & answers */}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className='score'>
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>

          <Question />

          <div
            className='next-button'
            onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
