import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import Categories from "../../data/Categories";

const Home = () => {
  return (
    <div className="content home-body">
      <div className="home-container">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings">
          <TextField label="Enter Your Name" variant="outlined" />
          <TextField select label="Select Category" variant="outlined">
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label="Select Difficulty" variant="outlined">
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

          <Button>Start Quiz</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
