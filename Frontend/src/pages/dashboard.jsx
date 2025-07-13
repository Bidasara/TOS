import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const { username } = useParams();
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    setDashboardData(null); // reset on username change
    setError(null);
    api.get(`/user/dashboard/${username}`)
      .then(res => setDashboardData(res.data.data))
      .catch(err => setError(err.response?.data?.message || "Error loading dashboard"));
  }, [username]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!dashboardData) return <div>Loading...</div>;

  // Example: Display stats
  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Dashboard for <span className="text-indigo-600">{username}</span></h2>
      <div className="grid grid-cols-3 gap-4">
        {["Easy", "Medium", "Hard"].map(level => (
          <div key={level} className="p-4 border rounded text-center">
            <h3 className="font-semibold">{level}</h3>
            <div>Attempted: {dashboardData[level]?.attempted ?? 0}</div>
            <div>Revised: {dashboardData[level]?.revised ?? 0}</div>
          </div>
        ))}
      </div>
      {/* You can add a chart here using Chart.js, Recharts, etc. */}
    </div>
  );
};

export default Dashboard;