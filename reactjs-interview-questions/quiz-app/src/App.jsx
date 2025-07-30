import { useState } from "react";
import "./App.css";
import questions from "./constants/dummy.json";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [useranswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...useranswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <>
      <div class="App">
        <h1>World Quiz</h1>

        {currentQuestion < questions.length && (
          <Question
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          />
        )}

        {/* {Result component} */}
        {currentQuestion === questions.length && (
          <Result
            userAnswers={useranswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
