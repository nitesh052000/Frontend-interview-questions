import React from "react";

const Question = ({ question, onAnswerClick }) => {
  console.log(question, onAnswerClick);

  return (
    <div className="question">
      <h1>{question?.question}</h1>
      <ul className="options">
        {question.answerOptions?.map((option) => {
          return (
            <li key={option.text}>
              <button onClick={() => onAnswerClick(option.isCorrect)}>
                {option?.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
