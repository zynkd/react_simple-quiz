import { createContext, useReducer } from 'react';
import { shuffleAnswers, normalizeQuestions } from '../helpers';

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
  showResults: false,
  currentAnswer: '',
  correctAnswersCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_ANSWER':
      const correctAnswersCounter =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCounter + 1
          : state.correctAnswersCounter;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCounter,
      };

    case 'NEXT_QUESTION':
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: '',
      };

    case 'RESTART':
      return initialState;

    case 'LOADED_QUESTIONS':
      const normalizedQuestions = normalizeQuestions(action.payload);

      return {
        ...state,
        questions: normalizedQuestions,
        answers: shuffleAnswers(normalizedQuestions[0]),
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // Previously [state, dispatch] = useReducer ...
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
