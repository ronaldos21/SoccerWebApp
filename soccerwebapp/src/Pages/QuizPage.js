import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Confetti from "react-confetti";

const API_KEY = "AIzaSyCs15U0qW6_6EvS-jRuU5Fvj9ruc8JzrQY";  // Replace with your actual API key

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            setLoading(true);
            const generatedQuestions = await fetchQuestionsFromGemini();

            if (generatedQuestions.length > 0) {
                setQuestions(generatedQuestions);
            } else {
                console.error("No valid questions received from API.");
            }

            setLoading(false);
        };

        fetchQuestions();
    }, []);

    // Function to Fetch Questions from Google Gemini API
    const fetchQuestionsFromGemini = async () => {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Generate exactly 5 multiple-choice soccer quiz questions in JSON format.
        Ensure each question has:
        - "question" (string)
        - "options" (array of 4 choices)
        - "answer" (string, correct answer)
        
        Example output:
        [
            {
                "question": "Who won the FIFA World Cup in 2018?",
                "options": ["Brazil", "Germany", "France", "Argentina"],
                "answer": "France"
            }
        ]
            ** Return only raw JSON, no markdown formatting or extra text.** `;

        try {
            const result = await model.generateContent(prompt);
            const responseText = await result.response.text();

            console.log("Gemini API Raw Response:", responseText); // Debugging output

            // Ensure responseText is properly formatted JSON
            const parsedQuestions = JSON.parse(responseText);

            if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
                console.error("Parsed questions are empty or not an array.");
                return [];
            }

            return parsedQuestions;
        } catch (error) {
            console.error("Error fetching quiz questions from Gemini API:", error);
            return [];
        }
    };

    const handleAnswer = (option) => {
        setSelectedAnswer(option);
        setShowFeedback(true);
        if (option === questions[currentQuestion]?.answer) {
            setScore(score + 1);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
        setShowConfetti(false);
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
            {/* Confetti Effect */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            {/* Show loading message until questions are available */}
            {loading ? (
                <p className="text-center text-xl mt-10">Loading quiz questions...</p>
            ) : questions.length === 0 ? (
                <p className="text-center text-red-500 text-xl mt-10">
                    No questions found. Please try again later.
                </p>
            ) : (
                <>
                    {/* Header Section */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Soccer Quiz</h1>
                        <div className="w-1/2 bg-gray-300 h-2 rounded-lg relative mx-4">
                            <div className="bg-green-500 h-2 rounded-lg" style={{ width: `${progress}% ` }}></div>
                        </div>
                        <p>{`Question ${currentQuestion + 1} of ${questions.length} `}</p>
                    </div>

                    {/* Question and Options */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-6">{questions[currentQuestion]?.question}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {questions[currentQuestion]?.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    disabled={showFeedback}
                                    className={`py - 3 px - 6 rounded - lg font - semibold transition - colors ${selectedAnswer === option
                                        ? option === questions[currentQuestion]?.answer
                                            ? "bg-green-500 text-white"
                                            : "bg-red-500 text-white"
                                        : "bg-gray-200 hover:bg-gray-300"
                                        } `}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {showFeedback && (
                            <p className="mt-4 text-lg">
                                {selectedAnswer === questions[currentQuestion]?.answer
                                    ? "Correct!"
                                    : `Incorrect! The correct answer was ${questions[currentQuestion]?.answer}.`}
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
                            <button onClick={handleNextQuestion} disabled={!showFeedback} className="bg-green-500 text-white py-2 px-4 rounded-lg">
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={() => alert(`Quiz finished! Your score is ${score}/${questions.length}`)
                                }
                                disabled={!showFeedback
                                }
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                            >
                                Finish
                            </button >
                        )}
                    </div >
                </>
            )}
        </div >
    );
};

export default QuizPage;
