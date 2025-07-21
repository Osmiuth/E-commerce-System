import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";
import logo from '../assets/logo.png';

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/admin")
            } else {
                navigate("/login")
            }
        } catch (error) {
            if (error.response && error.response.data.detail) {
                alert(error.response.data.detail);
            } else {
                alert('An error occurred');
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="login-page">
        <div className="card-container">
        <div className="logo-container">
            <img src={logo} alt="Company Logo" />
        </div>
        <form onSubmit={handleSubmit} className="form-container">
            <h2>{name}</h2>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
        </div>
        </div>
    );
}

export default Form