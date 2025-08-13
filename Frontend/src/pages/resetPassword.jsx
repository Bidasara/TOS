import React from 'react';
import { useState } from "react";
import { useNavigate,useSearchParams } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/image.png'

const ResetPassword = (props) => {
    const {setATokenExpiry,setAccessToken,setAvatarLink,setUsername} = useAuth();
    const [error, setError] = useState("A reset code has been sent to your registered email, use that here");
    const navigate = useNavigate();
    const { login } = useAuth();
    const { theme } = useTheme();
    const [searchParams] = useSearchParams();

    // Store username and password in state
    const [formData, setformData] = useState({ resetCode: "", password: "", confirmPassword: "" });

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setformData({ ...formData, [id]: value })
        setError(null);
    };

    // Send data to the server
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = searchParams.get('email'); 
        if (formData.password != formData.confirmPassword) {
            setError("The new password and the confirm password should be same")
            return;
        }
        if (!email) {
            setError("Email parameter is missing from the URL.");
            return;
        }
        try {
            console.log(email)
            const response = await api.post('auth/reset-password', {
                email: email,
                password: formData.password,
                token: formData.resetCode
            })
            console.log(response)
            const { accessToken, user, accessTokenExpiry, refreshTokenExpiry } = response.data.data;
            setAccessToken(accessToken); // Store accessToken in memory
            setATokenExpiry(accessTokenExpiry);
            setUsername(user.username);
            setAvatarLink(user.avatar);
            localStorage.setItem("username", user.username);
            localStorage.setItem("avatarLink", user.avatar);
            navigate("/");
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'An error occurred');
            } else {
                setError(error.message);
            }
        }
    }
    return (
        <div className={`min-h-screen flex flex-col items-center justify-baseline transition-all duration-300 ${theme === 'tos' ? 'tos' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text' : 'bg-gray-100 dark:bg-gray-900'}`}>
            <img title='Tech of Success' src={logo} style={{ imageRendering: 'pixelated' }} onClick={() => navigate("/")} className={`m-3 w-35 cursor-pointer ${theme === 'tos' ? 'tos-accent tos-theme-mono' : ''}`} alt="" />
            <div className={`w-full max-w-md p-8 rounded-xl shadow-lg ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'bg-black border-2 border-pink-500 neon-text' : 'bg-white dark:bg-gray-800'}`}>
                <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-800 dark:text-white'}`}>Reset Password</h2>
                <form>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="password">Reset Code</label>
                        <input
                            type="password"
                            id="resetCode"
                            value={formData.resetCode}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${theme === 'tos' ? 'tos-border tos-theme-mono' : 'border border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'}`}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="password">New Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${theme === 'tos' ? 'tos-border tos-theme-mono' : 'border border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'}`}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${theme === 'tos' ? 'tos-border tos-theme-mono' : 'border border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'}`}
                            required
                        />
                    </div>
                    <button type="submit" className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${theme === 'tos' ? 'tos-border tos-accent tos-theme-mono' : 'text-white bg-indigo-600 hover:bg-indigo-700'}`} onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;