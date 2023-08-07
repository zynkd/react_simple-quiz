export const shuffleAnswers = (question) => {
  const mergedAnswers = [question.correctAnswer, ...question.incorrectAnswers];

  return mergedAnswers.sort(() => Math.random() - 0.5);
};

export const normalizeQuestions = (questionsFromServer) => {
  return questionsFromServer.map((questionObject) => {
    const incorrectAnswers = questionObject.incorrect_answers.map((answer) =>
      decodeURIComponent(answer),
    );

    // Strip out unneeded things, and decode encoded strings
    return {
      incorrectAnswers,
      question: decodeURIComponent(questionObject.question),
      correctAnswer: decodeURIComponent(questionObject.correct_answer),
    };
  });
};
