import { createContext, useReducer } from 'react';

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
  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // Previously [state, dispatch] = useReducer ...
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
