import React, { useEffect, useState } from 'react';
import api from '../api.js';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';

const ToRevise = () => {
    const { accessToken } = useAuth();
    const {theme} = useTheme();
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        if (!accessToken) return;
        setLoading(true);
        setError(null);
        try {
            const response = await api.get('data/reviseList', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setProblems(response.data.data || []);
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to fetch problems.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (accessToken) fetchData();
    }, [accessToken]);

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg min-h-[300px]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-indigo-700 dark:text-cyan-400">Problems to Revise</h2>
                <button
                    onClick={fetchData}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow transition-all"
                    disabled={loading}
                >
                    {loading ? 'Refreshing...' : 'Refresh'}
                </button>
            </div>
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}
            {loading && !problems.length ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : problems.length === 0 ? (
                <div className="text-center text-gray-500">No problems to revise! 🎉</div>
            ) : (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {problems.map((prob, idx) => (
                        <li key={prob._id || idx} className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                                <div className="font-semibold text-lg text-gray-800 dark:text-white">{prob.problemId?.title || 'Untitled Problem'}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-300">
                                    #{prob.problemId?.num} &nbsp;|&nbsp; {prob.problemId?.difficulty}
                                </div>
                            </div>
                            <button
                                // onClick={()=>handleRevise}
                                className={`text-xs px-2 py-1 rounded transition-colors border ${prob.revised ? (theme === 'cyberpunk' ? 'bg-pink-700 text-pink-200 border-pink-400 neon-text' : 'bg-blue-200 text-blue-800 border-blue-400 dark:bg-blue-900/40 dark:text-blue-200') : (theme === 'cyberpunk' ? 'bg-black text-cyan-400 border-cyan-400 neon-text' : 'bg-gray-100 text-gray-600 border-gray-300 dark:bg-gray-700/40 dark:text-gray-300')}`}
                                title="Toggle Revised"
                            >
                                {prob.revised ? '✓ Revised' : 'Mark Revised'}
                            </button>
                            {prob.problemId?.link && (
                                <a
                                    href={prob.problemId.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline text-sm font-medium"
                                >
                                    View Problem
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ToRevise;
