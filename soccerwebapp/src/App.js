import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import HomePage from "./Pages/HomePage";
const App = () => {
  return (
    <Router>

      <div className="font-sans antialiased">

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Quiz Page */}
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;