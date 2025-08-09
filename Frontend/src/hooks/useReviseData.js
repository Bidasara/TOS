import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import api from '../api.js';

export const useReviseData = (viewMode) => {
    const { accessToken } = useAuth();
    const [reviseData, setReviseData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchReviseData = useCallback(async () => {
        if (!accessToken) return;
        console.log("refetched")

        setIsLoading(true);
        setError(null);
        try {
            const response = await api.get('data/reviseList', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setReviseData(response.data.data || []);
        } catch (err) {
            console.error("Failed to fetch revision data:", err);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [accessToken]);

    useEffect(() => {
        if (viewMode === 'toRevise') {
            fetchReviseData();
        }
    }, [viewMode, fetchReviseData]);

    return { reviseData, isLoading, error, refetch: fetchReviseData };
};