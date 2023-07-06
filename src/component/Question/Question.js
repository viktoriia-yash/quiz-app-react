import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Question = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selectedQ, setSelectedQ] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (i) => {
    if (selectedQ === i && selectedQ === correct) {
      return "select";
    } else if (selectedQ === i && selectedQ !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelectedQ(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestion > 8) {
      navigate("/result");
    } else if (selectedQ) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedQ();
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {};

  return (
    <div>
      <h3>Question {currentQuestion + 1}</h3>
      <div>
        <h3>{questions[currentQuestion].question}</h3>
        <div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                key={i}
                disabled={selectedQ}
                className={`singleOption ${selectedQ && handleSelect(i)}`}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="control-btns">
          <Button variant="contained" href="/" onClick={handleQuit}>
            Quit Quiz
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
