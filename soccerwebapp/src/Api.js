import React, { useState } from 'react';

// TeamStatistics Component
const TeamStatistics = () => {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    if (!teamName) return;

    setLoading(true);
    setSearchQuery(teamName);

    try {
      const url = `https://api-football-v1.p.rapidapi.com/v3/teams?name=${encodeURIComponent(teamName)}`;
      console.log('Fetching URL:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '072413bb6dmsh28a198cfd4a56a0p1e40edjsn5445eabcaa00',
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Error response:', errorDetails);
        throw new Error(`Error: ${response.status}, ${errorDetails.message}`);
      }

      const data = await response.json();
      console.log("API Response Data:", data);

      if (data && data.response && Array.isArray(data.response) && data.response.length > 0) {
        setTeamData(data.response[0]);
        setErrorMessage('');
      } else {
        setErrorMessage('No se encontraron resultados para este equipo.');
        setTeamData(null);
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
      setErrorMessage(`Error: ${error.message}`);
      setTeamData(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Cargando...</div>;
  }

  return (
    <div className="p-6 space-y-6 bg-gray-100 rounded-xl shadow-lg">
      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Ingresa el nombre del equipo"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Buscar Equipo
        </button>
      </div>

      {teamData && (
        <div className="mt-6">
          <div className="flex items-center space-x-4">
            <img src={teamData.team.logo} alt={teamData.team.name} className="w-16 h-16" />
            <h1 className="text-3xl font-semibold">{teamData.team.name}</h1>
          </div>

          <div className="flex items-center space-x-4">
            <img src={teamData.venue.image} alt={teamData.venue.name} className="w-12 h-12" />
            <p className="text-xl">{teamData.venue.name}, {teamData.venue.city}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Detalles del equipo</h2>
            <p><strong>Fundado:</strong> {teamData.team.founded}</p>
            <p><strong>País:</strong> {teamData.team.country}</p>
            <p><strong>Estadio:</strong> {teamData.venue.name}</p>
            <p><strong>Dirección:</strong> {teamData.venue.address}</p>
            <p><strong>Capacidad:</strong> {teamData.venue.capacity}</p>
            <p><strong>Superficie:</strong> {teamData.venue.surface}</p>
          </div>
          <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Play</button>
        </div>
      )}

      {searchQuery && !teamData && !loading && (
        <div className="mt-6 text-center text-lg text-red-500">
          {errorMessage || `No se encontraron resultados para "${searchQuery}"`}
        </div>
      )}
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl p-6">
        <TeamStatistics />
      </div>
    </div>
  );
};

export default App;


