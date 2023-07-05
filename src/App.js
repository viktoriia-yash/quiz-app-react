import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
