const reactQuestions = [
  {
    question: "What is React?",
    incorrectAnswers: [
      "A programming language",
      "A styling framework",
      "A database system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What does JSX stand for?",
    incorrectAnswers: [
      "Jigsaw XML",
      "JSON XML",
      "Java Syntax Extension",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    question: "In React, what is the virtual DOM?",
    incorrectAnswers: [
      "A feature for handling audio and video content",
      "A type of HTML element",
      "A concept unrelated to React",
    ],
    correctAnswer: "A lightweight representation of the actual DOM",
  },
  {
    question: "How can you pass data to a component in React?",
    incorrectAnswers: [
      "By using the 'data' attribute",
      "Only through global variables",
      "By directly modifying the component's state",
    ],
    correctAnswer: "Through props",
  },
  {
    question: "What is the main purpose of React Router?",
    incorrectAnswers: [
      "Handling HTTP requests",
      "Managing global state",
      "Styling components",
    ],
    correctAnswer: "Enabling navigation and routing in a React application",
  },
  {
    question: "Which method is called when a component is being removed from the DOM?",
    incorrectAnswers: [
      "render",
      "componentDidMount",
      "componentWillUpdate",
    ],
    correctAnswer: "componentWillUnmount",
  },
  {
    question: "What is the role of state in a React component?",
    incorrectAnswers: [
      "It stores external API data",
      "It handles component styling",
      "It replaces props",
    ],
    correctAnswer: "It stores and manages internal component data",
  },
  {
    question: "How do you perform side effects in a React component?",
    incorrectAnswers: [
      "By directly manipulating the DOM",
      "By using global variables",
      "React components cannot have side effects",
    ],
    correctAnswer: "By using useEffect hook",
  },
];

export default reactQuestions;
