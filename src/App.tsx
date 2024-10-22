import { Route, Routes } from "react-router-dom";
import React, { useState, createContext } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import javascriptLogo from "./assets/card-language-images/javascript-logo.webp";
import phpLogo from "./assets/card-language-images/php-logo.png";

//List of courses as Context
export const QuizContext = createContext(null);

let listQuizes = [
  {
    id: 1,
    imagePath: javascriptLogo,
    title: "Javascript",
    description: "A Javascript quiz",
    difficultyLevel: 1,
    questions: [
      {
        question:
          "Can a variable declared inside blocks {} with <i>var</i> be accessed outside these blocs?",
        answers: ["Yes", "No"],
        correctAnswers: [0],
      },
      {
        question: "ECMAScript 2015 is also known as ES5.",
        answers: ["True", "False"],
        correctAnswers: [1],
      },
    ],
  },
  {
    id: 2,
    imagePath: phpLogo,
    title: "PHP",
    description: "A PHP quiz",
    difficultyLevel: 3,
  },
];

function App() {
  return (
    <>
      <QuizContext.Provider value={listQuizes}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/quiz/:id" element={<Quiz></Quiz>}></Route>
        </Routes>
      </QuizContext.Provider>
    </>
  );
}

export default App;
