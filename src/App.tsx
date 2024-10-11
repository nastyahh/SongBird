import { Route, Routes } from "react-router-dom";
import "./App.scss";
// import Layout from "./Layout";
import HomePage from "./pages/HomePage/HomePage";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<HomePage />} />
      <Route path="quiz" element={<Quiz />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
