
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

const GOAL_REVISED = 100; // Example goal for unlocking premium animation

const Dashboard = () => {
  const { username } = useParams();
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);
  const [medals, setMedals] = useState([]); // Placeholder for medals

  useEffect(() => {
    if (!username) return;
    setDashboardData(null);
    setError(null);
    api.get(`/user/dashboard/${username}`)
      .then(res => {
        setDashboardData(res.data.data.stats);
      })
      .catch(err => setError(err.response?.data?.message || "Error loading dashboard"));
  }, [username]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!dashboardData) return <div>Loading...</div>;

  // Calculate total revised
  const totalRevised = dashboardData.reduce(
    (sum, stat) => sum + (stat.revisedCount || 0),
    0
  );
  const progress = Math.min((totalRevised / GOAL_REVISED) * 100, 100);
  const premiumUnlocked = totalRevised >= GOAL_REVISED;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg space-y-8">
      {/* Quick Stats */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
          <span>Quick Stats</span>
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[0,1,2].map(level => (
            <div key={level} className="p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50 text-center shadow-sm">
              <h3 className="font-semibold text-lg text-indigo-600">{0?"Easy":1?"Medium":"Hard"}</h3>
              <div className="mt-2 text-sm">Attempted: <span className="font-bold">{dashboardData[level]?.solvedCount ?? 0}</span></div>
              <div className="text-sm">Revised: <span className="font-bold">{dashboardData[level]?.revisedCount ?? 0}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Animation Progress */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>Premium Animation Unlock</span>
        </h3>
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className={`absolute inset-0 rounded-full border-4 ${premiumUnlocked ? 'border-yellow-400' : 'border-gray-300'} flex items-center justify-center bg-gray-100`}>
              {/* Replace with actual animation preview if unlocked */}
              {premiumUnlocked ? (
                <span className="text-4xl">🎉</span>
              ) : (
                <span className="text-4xl opacity-40 grayscale">🔥</span>
              )}
            </div>
            {!premiumUnlocked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-gray-400 font-semibold">Locked</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="mb-1 text-sm text-gray-600">Revised {totalRevised} / {GOAL_REVISED} questions</div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              {premiumUnlocked ? "Premium animation unlocked!" : `Unlock at ${GOAL_REVISED} revised questions.`}
            </div>
          </div>
        </div>
      </section>

      {/* Medals Showcase */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span>Medals Showcase</span>
        </h3>
        <div className="flex flex-wrap gap-4">
          {medals.length === 0 ? (
            <div className="text-gray-400 italic">No medals yet. Complete recommended lists and other achievements to earn medals!</div>
          ) : (
            medals.map((medal, idx) => (
              <div key={idx} className="w-20 h-20 rounded-full bg-yellow-100 border-2 border-yellow-400 flex flex-col items-center justify-center shadow">
                <span className="text-3xl">🏅</span>
                <span className="text-xs mt-1 font-semibold text-yellow-700">{medal.name}</span>
              </div>
            ))
          )}
        </div>
        <div className="mt-2 text-xs text-gray-500">(In the future: complete recommended lists and other challenges to earn medals!)</div>
      </section>
    </div>
  );
};

export default Dashboard;