import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/image.png'

const Register = (props) => {
    const [error, setError] = useState(null);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [selectedFileAvatar, setSelectedFileAvatar] = useState(null);
    const { setAccessToken, setUsername, setAvatarLink } = useAuth();
    const { theme } = useTheme();
    const isPasswordValid = (password) => {
        return password && password.length >= 8 && password.length <= 24;
    }
    const isUsernameValid = (username) => {
        username = username.trim();
        return username && username.length >= 3 && username.length <= 20;
    }
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const [formData, setformData] = useState({ username: "", email: "", password: "" });
    const isFormValid = isUsernameValid(formData.username) && isEmailValid(formData.email) && isPasswordValid(formData.password) && (selectedAvatar || selectedFileAvatar);
    const navigate = useNavigate();
    // Store username and password in state

    // Default avatars array
    const defaultAvatars = [
        {
            id: 1,
            src: "https://res.cloudinary.com/harshitbd/image/upload/v1751105892/vxi4hdzknhh5c8bekrwr.png",
            alt: "Samurai"
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/harshitbd/image/upload/v1751107358/Gemini_Generated_Image_5kbrju5kbrju5kbr_l4gdqb.png",
            alt: "Ninja"
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/harshitbd/image/upload/v1751106265/Gemini_Generated_Image_nfvrfsnfvrfsnfvr_t9loqj.png",
            alt: "Wizard"
        },
        {
            id: 4,
            src: "https://res.cloudinary.com/harshitbd/image/upload/v1751106265/Gemini_Generated_Image_9fz4199fz4199fz4_gaijb6.png",
            alt: "Knight"
        },
        {
            id: 5,
            src: "https://res.cloudinary.com/harshitbd/image/upload/v1751106264/Gemini_Generated_Image_d2xqycd2xqycd2xq_ts9a8g.png",
            alt: "Demon"
        }
    ];

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setformData({ ...formData, [id]: value })
        setError(null);
    };

    // Handle file change for custom avatar
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFileAvatar(file);
            setSelectedAvatar(null);
            setError(null);
        }
    }
    // Handle avatar selection
    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
        setSelectedFileAvatar(null);
        setError(null);
    };

    // Send data to the server
    const sendRegisterReq = async (e) => {
        e.preventDefault();

        if (!selectedAvatar && !selectedFileAvatar) {
            setError("Please select an avatar");
            return;
        }

        const uploadData = new FormData();

        // Always append these required fields
        uploadData.append("username", formData.username);
        uploadData.append("email", formData.email);
        uploadData.append("password", formData.password);

        // Only append file if it exists
        if (selectedFileAvatar) {
            uploadData.append("avatar", selectedFileAvatar);
        }

        // Only append avatarLink if a default avatar is selected (NOT null)
        if (selectedAvatar && selectedAvatar.src) {
            uploadData.append("avatarLink", selectedAvatar.src);
        }


        try {
            const response = await api.post("/auth/register", uploadData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            const { accessToken, user } = response.data.data;
            setAccessToken(accessToken);
            setUsername(user.username);
            setAvatarLink(user.avatar);
            localStorage.setItem("username", user.username);
            localStorage.setItem("avatarLink", user.avatar);

            navigate("/");
        } catch (error) {
            console.log("Error:", error);
            if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else {
                setError("Registration failed. Please try again.");
            }
        }
    }
    return (
        <div className={`min-h-screen h-full pb-8 flex flex-col items-center justify-baseline transition-all duration-300 ${theme === 'tos' ? 'tos' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text' : 'bg-gray-100 dark:bg-gray-900'}`}>
            <img title='Tech of Success' src={logo} style={{imageRendering: 'pixelated'}} onClick={() => navigate("/")} className={`m-3 w-35 cursor-pointer ${theme === 'tos' ? 'tos-accent tos-theme-mono' : ''}`} alt="" />
            <div className={`w-full max-w-md p-8 rounded-xl shadow-lg ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'bg-black border-2 border-cyan-400 neon-text' : 'bg-white dark:bg-gray-800'}`}>
                <h2 className={`text-2xl font-bold mb-4 text-center ${theme === 'tos' ? 'tos-accent tos-theme-mono' : theme === 'cyberpunk' ? 'text-cyan-400 neon-text' : 'text-gray-800 dark:text-white'}`}>Register</h2>
                <form>
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}
                    {/* Avatar Selection Section */}
                    <div className="mb-4">
                        <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 flex-nowrap">
                            {defaultAvatars.map((avatar) => (
                                <div
                                    key={avatar.id}
                                    onClick={() => handleAvatarSelect(avatar)}
                                    className={`cursor-pointer transition-all duration-200 transform hover:scale-105 flex-shrink-0 ${selectedAvatar?.id === avatar.id
                                        ? theme === 'tos' ? 'ring-2 tos-border' : 'ring-2 ring-indigo-500 ring-offset-1'
                                        : theme === 'tos' ? 'ring-1 tos-border hover:tos-accent' : 'ring-1 ring-gray-200 hover:ring-indigo-300'
                                        } rounded-full p-0.5`}
                                >
                                    <img
                                        src={avatar.src}
                                        alt={avatar.alt}
                                        className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover border ${theme === 'tos' ? 'tos-border' : 'border-white dark:border-gray-700'}`}
                                    />
                                </div>
                            ))}
                            <div className={`cursor-pointer transition-all duration-200 transform hover:scale-105 flex-shrink-0 rounded-full p-0.5 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center relative overflow-hidden ${theme === 'tos' ? 'tos-border bg-[#23234a]' : 'ring-1 ring-gray-200 hover:ring-indigo-300 bg-gray-100 dark:bg-gray-700'}`}>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${theme === 'tos'?'bg-[#23234a]':''} `}
                                />
                                {!selectedFileAvatar && (
                                    <img
                                        src="/plus.svg"
                                        alt="Add file"
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                    />
                                )}
                                {selectedFileAvatar && (
                                    <span className="truncate max-w-[80%] text-xs sm:text-sm">
                                        {selectedFileAvatar.name}
                                    </span>
                                )}
                            </div>
                        </div>
                        {(selectedAvatar || selectedFileAvatar) && (
                            <p className={`text-center text-sm mt-2 ${theme === 'tos' ? 'tos-light tos-theme-mono' : 'text-gray-600 dark:text-gray-400'}`}>
                                {selectedAvatar ? selectedAvatar.alt : "Custom Avatar"}
                            </p>
                        )}
                    </div>
                    {(selectedAvatar != null || selectedFileAvatar != null) ? null : <label className={`block text-sm font-medium mb-3 text-center ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-gray-700 dark:text-gray-200'}`}>
                        Choose a default avatar
                    </label>}

                    <div className="mb-4">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            required
                        />
                        {!isUsernameValid(formData.username) && (<p className="text-xs dark:text-gray-400 text-gray-500 mt-1">Username must be 3-20 characters long.</p>)}
                    </div>
                    <div className="mb-4">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" required
                        />
                        {!isEmailValid(formData.email) && (<p className="text-xs dark:text-gray-400 text-gray-500 mt-1">Please enter a valid email address.</p>)}
                    </div>
                    <div className="mb-6">
                        <label className={`block mb-2 text-sm font-medium ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-gray-700 dark:text-gray-200'}`} htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            required
                        />
                        {!isPasswordValid(formData.password) && (<p className="text-xs dark:text-gray-400 text-gray-500 mt-1">Password must be 8-24 characters long.</p>)}
                    </div>
                    <button type="submit" className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'opacity-50 cursor-not-allowed bg-gray-500'}`} onClick={sendRegisterReq}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;