import { createContext, useState, useContext, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState(() => localStorage.getItem("username") || null);
  const [avatarLink, setAvatarLink] = useState(() => localStorage.getItem("avatarLink") || null);
  const [loading, setLoading] = useState(true);
  const [ATokenExpiry, setATokenExpiry] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setLoading(true);
  }, [])

  useEffect(() => {
    if (!accessToken) {
      refreshAccessToken();
    } else {
      const isExpired = ATokenExpiry && new Date() >= new Date(ATokenExpiry);
      if (isExpired) {
        console.log("refreshToken expired")
        refreshAccessToken();
      }
    }
  }, [accessToken, ATokenExpiry]);

  const getCart = async () => {
    try {
      const response = await api.get('/user/cart', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
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
          Authorization: `Bearer ${accessToken}`
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
          Authorization: `Bearer ${accessToken}`
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
      setUsername(user.username);
      setAvatarLink(user.avatar);
      localStorage.setItem("username", user.username);
      localStorage.setItem("avatarLink", user.avatar);
      navigate("/");
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  }

  const logout = async () => {
    try {
      await api.post('/auth/logout', { withCredentials: true });
    } catch (err) {
      console.error("Server logout failed, proceeding with client logout:", error)
    } finally {
      // This block runs whether the try succeeds or fails
      setAccessToken(null);
      setUsername(null);
      setAvatarLink(null);
      localStorage.clear();
      localStorage.removeItem('username');
      localStorage.removeItem('avatarLink');
      localStorage.removeItem('userData');
      // No need to dispatch a custom event if the state change handles it
      window.dispatchEvent(new Event("user-logged-out"));
      navigate('/login');
    }
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
    } catch (err) {
      if (err.response?.status !== 403 && err.response?.status !== 400) {
        console.error("Token refresh failed:", err);
      }
      logout();
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
      login
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);