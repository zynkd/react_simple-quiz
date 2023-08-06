export const shuffleAnswers = (question) => {
  const mergedAnswers = [question.correctAnswer, ...question.incorrectAnswers];

  return mergedAnswers.sort(() => Math.random() - 0.5);
};
