import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "/Users/kevingodoy/Documents/GitHub/SoccerWebApp/soccerwebapp/src/Components/Menu.js";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) return;

    setLoading(true);

    try {
      const url = `https://api-football-v1.p.rapidapi.com/v3/teams?name=${encodeURIComponent(searchTerm)}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": "072413bb6dmsh28a198cfd4a56a0p1e40edjsn5445eabcaa00",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();

      if (data && data.response && data.response.length > 0) {
        setTeamData(data.response[0]);
      } else {
        setTeamData(null);
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
      setTeamData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans antialiased">
      <Menu />
      <section className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white text-center py-40">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to SoccerQuiz!
        </h1>
        <p className="text-lg md:text-2xl mb-6">
            A modern site for soccer fans. Discover how big of a fan you are of your team.
        </p>
        <a
          href="#services"
          className="inline-block bg-yellow-500 text-gray-800 py-3 px-6 rounded-full text-lg transition transform hover:scale-105 hover:bg-yellow-400"
        >
          Explore Our Teams Availables
        </a>
      </section>

      {/* Teams Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-12 text-gray-800">Teams</h3>
          <form className="max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <input
                type="search"
                className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Teams...."
                required
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

          {teamData && (
            <div className="flex justify-center mt-6">
              <div className="bg-white max-w-md w-full rounded-lg shadow-md p-6">
                <img
                  src={teamData.team.logo}
                  alt={teamData.team.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {teamData.team.name}
                </h3>
                <p className="text-gray-600 mb-4">{teamData.team.country}</p>
                <div className="text-left">
                  <p>
                    <span className="font-semibold">Founded:</span>{" "}
                    {teamData.team.founded || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Stadium:</span>{" "}
                    {teamData.venue?.name || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">City:</span>{" "}
                    {teamData.venue?.city || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold">Capacity:</span>{" "}
                    {teamData.venue?.capacity || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {!loading && teamData === null && searchTerm && (
            <p className="mt-6 text-gray-600">
              No results found for "{searchTerm}".
            </p>
          )}
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 MyApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
