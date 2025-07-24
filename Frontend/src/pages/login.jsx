import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/image.png'

const Login = (props) => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useAuth();
    const { theme } = useTheme();

    // Store username and password in state
    const [formData, setformData] = useState({ username: "", password: "" });

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setformData({ ...formData, [id]: value })
        setError(null);
    };

    // Send data to the server
    const sendLoginReq = async (e) => {
        e.preventDefault();
        await login(formData);
    }
    return (
        <div className={`min-h-screen flex flex-col items-center justify-baseline transition-all duration-300 ${theme === 'tos' ? 'tos' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text' : 'bg-gray-100 dark:bg-gray-900'}`}>
            <img title='Tech of Success' src={logo} style={{imageRendering: 'pixelated'}} onClick={() => navigate("/")} className={`m-3 w-35 cursor-pointer ${theme === 'tos' ? 'tos-accent tos-theme-mono' : ''}`} alt="" />
            <div className={`w-full max-w-md p-8 rounded-xl shadow-lg ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'bg-black border-2 border-pink-500 neon-text' : 'bg-white dark:bg-gray-800'}`}>
                <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-800 dark:text-white'}`}>Login</h2>
                <form>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${theme === 'tos' ? 'tos-border tos-theme-mono' : 'border border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'}`}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${theme === 'tos' ? 'tos-border tos-theme-mono' : 'border border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'}`}
                            required
                        />
                    </div>
                    <button type="submit" className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${theme === 'tos' ? 'tos-border tos-accent tos-theme-mono' : 'text-white bg-indigo-600 hover:bg-indigo-700'}`} onClick={sendLoginReq}>Login</button>
                    <div className="text-center text-sm my-2">OR</div>
                    <div className="text-center">
                        <span className={`text-gray-600 dark:text-gray-400 ${theme === 'tos' ? 'tos-light tos-theme-mono' : theme === 'cyberpunk' ? 'text-cyan-300 neon-text' : ''}`}>Don't have an account? </span>
                        <span type="submit" className={`w-full cursor-pointer font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${theme === 'tos' ? 'tos-accent tos-theme-mono hover:tos-light' : theme === 'cyberpunk' ? 'text-cyan-300 neon-text hover:text-pink-400' : 'text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300'}`} onClick={() => navigate("/register")}>Sign Up</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;