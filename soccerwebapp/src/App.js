import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import QuizPage from "./Pages/QuizPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className="font-sans antialiased">
        {/* Menu */}
        <Menu />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Quiz Page */}
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6">
          <p>© 2025 Soccer Quiz. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
