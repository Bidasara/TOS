import { createContext, useState, useContext, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { setAccessToken as setGlobalAccessToken, getAccessToken as getGlobalAccessToken, setLogoutCallback,removeAccessToken } from "../authToken";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [avatarLink, setAvatarLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ATokenExpiry, setATokenExpiry] = useState(null);
  const [RTokenExpiry, setRTokenExpiry] = useState(null);
  const [error, setError] = useState(null);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart]);

  useEffect(() => {
    setLogoutCallback(logout);
  },[])
  useEffect(() => {
    setLoading(true);
  },[]);

  useEffect(() => {
    if (!accessToken) {
      refreshAccessToken();
    } else {
      const isExpired = ATokenExpiry && new Date() >= new Date(ATokenExpiry);
      if (isExpired) {
        refreshAccessToken();
      }
    }
  }, [accessToken, ATokenExpiry ]);

  const getCart = async () => {
    try {
      const response = await api.get('/user/cart',{
        headers: {
          Authorization: `Bearer ${getGlobalAccessToken()}`
      }})
      console.log("Cart retrieved successfully:", response.data);
      setCart(response.data.data);
    } catch (error) {
      console.error("Error retrieving cart:", error);
      setError("Failed to retrieve cart. Please try again.");
    }
  }

  const addToCart = async (animationId) => {
    try {
      const response = await api.post(`/user/cart/:${animationId}`, {
        headers: {
          Authorization: `Bearer ${getGlobalAccessToken()}`
        }
      });
      console.log("Animation added to cart successfully:", response.data);
      setCart(response.data.data);
    } catch (error) {
      console.error("Error adding animation to cart:", error);
      setError("Failed to add animation to cart. Please try again.");
    }
  }

  const removeFromCart = async (animationId) => {
    try {
      const response = await api.delete(`/user/cart/:${animationId}`, {
        headers: {
          Authorization: `Bearer ${getGlobalAccessToken()}`
        }
      });
      console.log("Animation removed from cart successfully:", response.data);
      setCart(response.data.data);
    } catch (error) {
      console.error("Error removing animation from cart:", error);
      setError("Failed to remove animation from cart. Please try again.");
    }
  }

  const login = async (formData) => {
    try {
      const response = await api.post("/auth/login", formData, {
        withCredentials: true,
      });

      const { accessToken, user, accessTokenExpiry, refreshTokenExpiry } = response.data.data;
      setAccessToken(accessToken); // Store accessToken in memory
      setATokenExpiry(accessTokenExpiry);
      setRTokenExpiry(refreshTokenExpiry);
      setUsername(user.username);
      setAvatarLink(user.avatar);
      localStorage.setItem("username", user.username);
      localStorage.setItem("avatarLink", user.avatar);
      setGlobalAccessToken(accessToken);
      navigate("/");
    } catch (error) {

      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  }

  const logout = () => {
    api.post('/auth/logout', {}, { withCredentials: true })
      .then(() => {
        setAccessToken(null);
        setUsername(null);
        setAvatarLink(null);
        localStorage.removeItem('username');
        localStorage.removeItem('avatarLink');
        localStorage.removeItem('userData');
        removeAccessToken();
        window.dispatchEvent(new Event("user-logged-out"));
        navigate('/');
      })
      .catch(error => {
        console.error("Logout failed:", error);
        setAccessToken(null);
        setUsername(null);
        setAvatarLink(null);
        localStorage.removeItem('username');
        localStorage.removeItem('avatarLink');
        localStorage.removeItem('userData');
        removeAccessToken();
        window.dispatchEvent(new Event("user-logged-out"));
        navigate('/');
      });
  };

  const refreshAccessToken = async () => {
    try {
      const res = await api.post('/auth/refresh-token', {
        withCredentials: true,
      });

      setAccessToken(res.data.data.accessToken);
      const storedUsername = localStorage.getItem('username');
      const storedAvatarLink = localStorage.getItem('avatarLink');
      if (storedUsername) {
        setUsername(storedUsername);
      }
      if (storedAvatarLink) {
        setAvatarLink(storedAvatarLink);
      }
      setGlobalAccessToken(res.data.data.accessToken);

    } catch (err) {
      // Don't log this as an error - it's expected when no valid refresh token exists
      // (e.g., first visit, expired token, etc.)
      if (err.response?.status !== 403 && err.response?.status !== 400) {
        console.error("Token refresh failed:", err);
      }
      // logout();

      // Clear any existing auth state
      setAccessToken(null);
    } finally {
      setLoading(false);
    }
  };

  const isLoggedIn = !!accessToken;

  return (
    <AuthContext.Provider value={{
      accessToken,
      setAccessToken,
      username,
      setUsername,
      avatarLink,
      setAvatarLink,
      loading,
      setLoading,
      isLoggedIn,
      logout,
      ATokenExpiry,
      setATokenExpiry,
      RTokenExpiry,
      setRTokenExpiry,
      login
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);