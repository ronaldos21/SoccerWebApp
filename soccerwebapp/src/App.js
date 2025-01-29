import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import QuizPage from "./Pages/QuizPage";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";

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
        <Footer />

      </div>
    </Router >
  );
};

export default App;
