import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import Categories from "../../data/Categories";
import { useNavigate } from "react-router";
import ErrorMessage from "../../component/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content home-body">
      <div className="home-container">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings">
          {error && <ErrorMessage>Please Fill All the Fields</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
