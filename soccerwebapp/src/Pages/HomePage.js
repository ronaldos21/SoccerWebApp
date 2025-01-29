import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import soccerLogo from "../assets/soccerfield.jpg";

// Reusable API fetch function
const fetchTeams = async (endpoint) => {
    try {
        const url = `https://api-football-v1.p.rapidapi.com/v3/${endpoint}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "x-rapidapi-key": "072413bb6dmsh28a198cfd4a56a0p1e40edjsn5445eabcaa00",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            },
        });

        if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);

        const data = await response.json();
        return data.response || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch all teams on component mount
    useEffect(() => {
        const fetchAllTeams = async () => {
            setLoading(true);
            const data = await fetchTeams("teams"); // Use the reusable function
            setTeams(data);
            setFilteredTeams(data);
            setLoading(false);
        };

        fetchAllTeams();
    }, []);

    // Handle search triggered by the Search Button
    const handleSearch = async () => {
        if (!searchTerm.trim()) return; // Prevent empty searches

        setLoading(true);
        const data = await fetchTeams(`teams?name=${encodeURIComponent(searchTerm)}`);
        setFilteredTeams(data); // Update with filtered data
        setLoading(false);
    };

    return (
        <div className="font-sans antialiased">
            <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-center py-24 relative">
                <div className="absolute inset-0">
                    <img
                        src={soccerLogo}
                        alt="Soccer Field"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <div className="relative">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4">
                        Welcome to SoccerQuiz!
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">
                        A modern site for soccer fans. Discover how big of a fan you are of your team.
                    </p>
                    <a
                        href="/quiz"
                        className="inline-block bg-yellow-500 text-gray-800 py-3 px-6 rounded-full text-lg transition transform hover:scale-105 hover:bg-yellow-400"
                    >
                        Explore Our Teams Available
                    </a>
                </div>
            </section>

            {/*NEW IDEAS BELOW 82-102 */}

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-800">Why Choose SoccerQuiz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Engaging Quizzes</h3>
                            <p className="text-gray-600">Test your knowledge of your favorite teams and players.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Leaderboard</h3>
                            <p className="text-gray-600">Compete with friends and climb the leaderboard.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Team Insights</h3>
                            <p className="text-gray-600">Explore stats, history, and achievements of your favorite teams.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*NEW IDEAS BELOW 82-102 */}




            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto text-center px-6">
                    <h3 className="text-4xl font-bold mb-12 text-gray-800">Teams</h3>
                    <form className="max-w-md mx-auto">
                        <div className="flex items-center space-x-4">
                            <input
                                type="search"
                                className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search Teams..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={handleSearch}
                                className="bg-blue-500 text-white p-3 rounded-full"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    {loading && <p>Loading...</p>}

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTeams.map((team) => (
                            <div key={team.team.id} className="bg-white rounded-lg shadow-md p-6">
                                <img
                                    src={team.team.logo}
                                    alt={team.team.name}
                                    className="w-20 h-20 mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {team.team.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{team.team.country}</p>
                                <p className="text-gray-600">
                                    <strong>Founded:</strong> {team.team.founded || "N/A"}
                                </p>
                                {team.venue && (
                                    <>
                                        <p className="text-gray-600">
                                            <strong>Stadium:</strong> {team.venue.name || "N/A"}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>City:</strong> {team.venue.city || "N/A"}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Capacity:</strong> {team.venue.capacity || "N/A"}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {!loading && filteredTeams.length === 0 && searchTerm && (
                        <p className="mt-6 text-gray-600">No results found for "{searchTerm}".</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
