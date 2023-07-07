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
    <div className="content">
      <div className="container">
        <h3 className="title-homepage">Quiz Settings</h3>

        <div className="settings">
          {error && <ErrorMessage>Please Fill All the Fields</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            sx={{ my: "10px", width: "300px" }}
          />
          <TextField
            select
            label="Select Category"
            variant="standard"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            sx={{ my: "10px", width: "300px" }}
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
            variant="standard"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
            className="input-homepage"
            sx={{ my: "10px", width: "300px" }}
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
        </div>
        <button variant="text" onClick={handleSubmit} className="start-btn">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
