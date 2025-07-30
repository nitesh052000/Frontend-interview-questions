import React from "react";

const Result = ({ userAnswers, questions, resetQuiz }) => {
  console.log("questions", questions);

  const correctanswers = userAnswers.filter((answer) => answer).length;

  return (
    <>
      <h1>Results</h1>

      <p>
        You answered {correctanswers} out of{questions?.length} questions{" "}
        <span onClick={resetQuiz}>Click here to Retry</span>{" "}
      </p>

      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}. {question.question}
              <b>
                {userAnswers[index]
                  ? ""
                  : `- ${
                      question.answerOptions.find((ans) => ans.isCorrect).text
                    }`}
              </b>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Result;
