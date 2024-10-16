import { useState } from "react";
import { QuizContext } from "./Context/context";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [score, setScore] = useState(0);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const incrementScore = (points: number) => {
    setScore((prevScore) => prevScore + points);
  };

  return (
    <QuizContext.Provider
      value={{
        score,
        incrementScore,
        setScore,
        currentThemeIndex,
        setCurrentThemeIndex,
      }}
    >
      <div className="app">
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </QuizContext.Provider>
  );
};

export default Layout;
