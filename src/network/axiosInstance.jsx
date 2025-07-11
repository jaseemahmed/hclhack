import axios from "axios";

const axiosInstance = axios.create(import.meta.env.VITE_API_URL);


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


export default axiosInstance;