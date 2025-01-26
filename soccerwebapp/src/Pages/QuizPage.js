import React, { useState } from "react";
import Confetti from "react-confetti"; // Import the Confetti library



const QuizPage = () => {
    const questions = [
        {
            question: "Who won the FIFA World Cup in 2018?",
            options: ["Brazil", "Germany", "France", "Argentina"],
            answer: "France",
        },
        {
            question: "Which player has the most Ballon d'Or awards?",
            options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Zidane"],
            answer: "Lionel Messi",
        },
        // Add more questions...
        {
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Italy", "Brazil", "Argentina"],
            answer: "Brazil",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false); // Confetti state

    const handleAnswer = (option) => {
        setSelectedAnswer(option);
        setShowFeedback(true);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
            setShowConfetti(true); // Trigger confetti on correct answer
            setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds

        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
        setShowConfetti(false); // Ensure confetti stops on the next question
        setCurrentQuestion((prev) => prev + 1);
    };

    const handlePreviousQuestion = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
        setCurrentQuestion((prev) => prev - 1);
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;



    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Confetti */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}


            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Soccer Quiz</h1>
                <div className="w-1/2 bg-gray-300 h-2 rounded-lg relative mx-4">
                    <div
                        className="bg-green-500 h-2 rounded-lg"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p>{`Question ${currentQuestion + 1} of ${questions.length}`}</p>
            </div>

            {/* Question Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-6">
                    {questions[currentQuestion].question}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            disabled={showFeedback}
                            className={`py-3 px-6 rounded-lg font-semibold transition-colors ${selectedAnswer === option
                                ? option === questions[currentQuestion].answer
                                    ? "bg-green-500 text-white"
                                    : "bg-red-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {showFeedback && (
                    <p className="mt-4 text-lg">
                        {selectedAnswer === questions[currentQuestion].answer
                            ? "Correct!"
                            : `Incorrect! The correct answer was ${questions[currentQuestion].answer}.`}
                    </p>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                {currentQuestion < questions.length - 1 ? (
                    <button
                        onClick={handleNextQuestion}
                        disabled={!showFeedback}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={() => alert(`Quiz finished! Your score is ${score}/${questions.length}`)}
                        disabled={!showFeedback}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    >
                        Finish
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;