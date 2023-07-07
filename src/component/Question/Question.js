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
    <div className="question-container">
      <h3>Question {currentQuestion + 1}</h3>
      <div>
        <h3>{questions[currentQuestion].question}</h3>
        <div className="quiz-grid">
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
          <Button
            variant="contained"
            href="/"
            onClick={handleQuit}
            sx={{
              bgcolor: "#19A7CE",
              color: "#F6F1F1",
              borderRadius: 0,
              px: "20px",
              mr: "10px",
              "&:hover": { color: "#F6F1F1", bgcolor: "#19A7CE" },
            }}
          >
            Quit Quiz
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              bgcolor: "#19A7CE",
              color: "#F6F1F1",
              borderRadius: 0,
              px: "20px",
              "&:hover": { color: "#F6F1F1", bgcolor: "#19A7CE" },
            }}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
