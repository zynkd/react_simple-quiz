import Question from './Question';
import '../index.css';

const Quiz = () => {
  return (
    <div className='quiz'>
      <div className='score'>Questions 1/8</div>
      <Question />
      <div className="next-button">Next question</div>
    </div>
  );
};

export default Quiz;
