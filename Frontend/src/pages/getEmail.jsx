import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/image.png'

const GetEmail = (props) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const { theme } = useTheme();

    // Store email in state
    const [formData, setformData] = useState({ email: "" });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setformData({ ...formData, [id]: value })
        setError(null); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return; 
        }

        try {
            const response = await api.post('auth/forgot-password',{email:formData.email});
            navigate(`/resetPass?email=${formData.email}`);
        } catch(error) {
            setError(error.message);
        }
    }

    return (
        <div className={`min-h-screen flex flex-col items-center justify-baseline transition-all duration-300 ${theme === 'tos' ? 'tos' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text' : 'bg-gray-100 dark:bg-gray-900'}`}>
            <img title='Tech of Success' src={logo} style={{ imageRendering: 'pixelated' }} onClick={() => navigate("/")} className={`m-3 w-35 cursor-pointer ${theme === 'tos' ? 'tos-accent tos-theme-mono' : ''}`} alt="" />
            <div className={`w-full max-w-md p-8 rounded-xl shadow-lg ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'bg-black border-2 border-pink-500 neon-text' : 'bg-white dark:bg-gray-800'}`}>
                <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-800 dark:text-white'}`}>Reset Password</h2>
                
                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-pink-400 neon-text' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${theme === 'tos' ? 'tos-border tos-theme-mono' : 'border border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white'}`}
                            required
                        />
                    </div>
                    <button type="submit" className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${theme === 'tos' ? 'tos-border tos-accent tos-theme-mono' : 'text-white bg-indigo-600 hover:bg-indigo-700'}`}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default GetEmail;