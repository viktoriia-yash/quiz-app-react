import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../../component/Question/Question";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currentQuestion]);

  console.log(options);

  const handleShuffle = (optioncs) => {
    return optioncs.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="content">
      <div className="container">
        <h3 className="title-quiz">Welcome, {name}</h3>

        {questions ? (
          <>
            <div className="quiz-category-score">
              <div>{questions[currentQuestion].category}</div>
              <div>Score: {score}</div>
            </div>
            <Question
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              options={options}
              correct={questions[currentQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
            />
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Quiz;
