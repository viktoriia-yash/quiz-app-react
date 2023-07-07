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
        <Button
          href="/"
          sx={{
            bgcolor: "#19A7CE",
            color: "#F6F1F1",
            borderRadius: 0,
            px: "20px",
            "&:hover": { color: "#F6F1F1", bgcolor: "#19A7CE" },
          }}
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default Result;
