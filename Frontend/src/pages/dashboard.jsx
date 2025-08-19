import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import api from "../api";

// --- Configuration ---
const GOAL_REVISED = 100; // Goal for unlocking premium animation
const DIFFICULTY_LEVELS = [
    { level: 0, label: "Easy", color: "green" },
    { level: 1, label: "Medium", color: "yellow" },
    { level: 2, label: "Hard", color: "red" },
];

// --- Custom Hook for Data Fetching ---
const useDashboardData = (username) => {
    const [solved, setSolved] = useState(null);
    const [revised, setRevised] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!username) return;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await api.get(`/user/dashboard/${username}`);
                console.log(response)
                setSolved(response.data.data.solvedStats);
                setRevised(response.data.data.revisedStats);
            } catch (err) {
                setError(err.response?.data?.message || "Error loading dashboard");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [username]);

    return { solved, revised, error, isLoading };
};


// --- Child Components ---

const StatCard = ({ level, label, color, solved, revised }) => {
    const colorStyles = {
        green: {
            border: "border-green-500",
            bg: "bg-green-100",
            text: "text-green-800",
        },
        yellow: {
            border: "border-yellow-500",
            bg: "bg-yellow-100",
            text: "text-yellow-800",
        },
        red: {
            border: "border-red-500",
            bg: "bg-red-100",
            text: "text-red-800",
        },
    };

    return (
        <div className={`p-4 rounded-xl border-2 shadow-sm ${colorStyles[color]?.border || 'border-gray-300'} ${colorStyles[color]?.bg || 'bg-gray-100'}`}>
            <h3 className={`font-semibold text-lg ${colorStyles[color]?.text || 'text-gray-800'}`}>{label}</h3>
            <div className="mt-2 text-sm">Attempted: <span className="font-bold">{solved?.count ?? 0}</span></div>
            <div className="text-sm">Revised: <span className="font-bold">{revised?.count ?? 0}</span></div>
        </div>
    )
};

const ProgressSection = ({ totalRevised, goal }) => {
    const progress = useMemo(() => Math.min((totalRevised / goal) * 100, 100), [totalRevised, goal]);
    const isUnlocked = useMemo(() => totalRevised >= goal, [totalRevised, goal]);

    return (
        <section>
            <h3 className="text-xl font-semibold mb-2">Premium Animation Unlock</h3>
            <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
                <div className={`relative w-24 h-24 flex-shrink-0 rounded-full border-4 ${isUnlocked ? 'border-yellow-400' : 'border-gray-300'} flex items-center justify-center bg-gray-100`}>
                    <span className={`text-4xl transition-opacity ${isUnlocked ? 'opacity-100' : 'opacity-40 grayscale'}`}>{isUnlocked ? '🎉' : '🔥'}</span>
                    {!isUnlocked && <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 font-semibold">Locked</div>}
                </div>
                <div className="flex-1">
                    <div className="mb-1 text-sm text-gray-600">Revised {totalRevised} / {goal} questions</div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                        {isUnlocked ? "Premium animation unlocked!" : `Unlock at ${goal} revised questions.`}
                    </div>
                </div>
            </div>
        </section>
    );
};

const MedalsShowcase = ({ medals = [] }) => (
    <section>
        <h3 className="text-xl font-semibold mb-2">Medals Showcase</h3>
        <div className="flex flex-wrap gap-4">
            {medals.length === 0 ? (
                <div className="text-gray-400 italic">No medals yet. Complete achievements to earn them!</div>
            ) : (
                medals.map((medal, idx) => (
                    <div key={idx} className="w-20 h-20 rounded-full bg-yellow-100 border-2 border-yellow-400 flex flex-col items-center justify-center shadow" title={medal.name}>
                        <span className="text-3xl">🏅</span>
                        <span className="text-xs mt-1 font-semibold text-yellow-700 truncate">{medal.name}</span>
                    </div>
                ))
            )}
        </div>
    </section>
);


// --- Main Dashboard Component ---

const Dashboard = () => {
    const { username } = useParams();
    const { solved, revised, error, isLoading } = useDashboardData(username);
    const totalRevised = (revised?.[0]?.count || 0) + (revised?.[1]?.count || 0) + (revised?.[2]?.count || 0);
    console.log("Easy",revised?.[0]?.count,"Hard",revised?.[1]?.count)

    if (isLoading) return <div className="text-center p-10">Loading Dashboard...</div>;
    if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg space-y-8">
            <section>
                <h2 className="text-3xl font-bold mb-4 text-indigo-700">Quick Stats</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {DIFFICULTY_LEVELS.map(({ level, label, color }) => (
                        <StatCard
                            key={level}
                            level={level}
                            label={label}
                            color={color}
                            solved={solved.find(item=>item._id===label)}
                            revised={revised.find(item=>item._id===label)}
                        />
                    ))}
                </div>
            </section>

            <ProgressSection totalRevised={totalRevised} goal={GOAL_REVISED} />

            <MedalsShowcase medals={[]} /> {/* Pass actual medals here when available */}
        </div>
    );
};

export default Dashboard;