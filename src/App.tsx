import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<Layout />}>
        <Route path="quiz" element={<Quiz />} />
        <Route path="results" element={<Results />} />
      </Route>
    </Routes>
  );
}

export default App;
