import { createContext } from "react";
import { QuizContextProps } from "../utility/types";

export const QuizContext = createContext<QuizContextProps>({
  score: 0,
  incrementScore: () => {},
  setScore: () => {},
  currentThemeIndex: 0,
  setCurrentThemeIndex: () => {},
});
