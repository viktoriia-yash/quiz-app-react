import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="content">
      <div className="container">
        <h3 className="title-result">Final Score: {score}</h3>
        <Button variant="contained" href="/">
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default Result;
