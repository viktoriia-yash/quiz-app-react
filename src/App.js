import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const fetchQuestions = () => {};

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
