import React, { useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount('Timeout called!');
    }, 10);
    return () => clearTimeout(timer);
  }, []);

};

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrectAnswer = index === correctIndex;
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => onAnswered(isCorrectAnswer)}>
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}
export default Question;