import React, { useState } from "react";
import "./App.css";
import Quiz from "./pages/quiz/Quiz";
import Basics from "./pages/basics/Basics";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("")

  return (
    <div className="App">
      <h1> Typescript Tutorial </h1>
      <div>
        <button onClick={() => setSelectedPage("basics")}>Basics</button>
        <button onClick={() => setSelectedPage("quiz")}>Quiz</button>
      </div>
      {
        selectedPage === "basics" && <Basics />
      }
      {
        selectedPage === "quiz" && <Quiz />
      }
    </div>);
}

export default App;
