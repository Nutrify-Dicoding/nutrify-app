import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/authSlice";
import { addMessage } from "../redux/slices/toastifySlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginExample = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: 'user@test.com',
        password: '123',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post(`/auth/signin`, formData)
            .then((response) => {
                if (response.status === 200 && response.data.token) {
                    dispatch(setAuth({
                        token: response.data.token,
                        username: response.data.username,
                        isAuthenticated: true,
                    }));
                    dispatch(addMessage({
                        'text': response.data.message,
                        'type': 'success',
                    }))
                    navigate('/');
                } else {
                    dispatch(addMessage({
                        'text': "Invalid email or password. Please try again",
                        'type': 'error',
                    }))
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    dispatch(addMessage({
                        'text': error.response.data.message ? error.response.data.message : "Invalid email or password. Please try again",
                        'type': 'error',
                    }))
                } else {
                    console.log(error);
                }
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="pt-24 px-[6.25%] py-16">
            <h1 className="font-semibold text-xl py-7">Login Example</h1>
            <form onSubmit={handleSubmit}>
                <label className="block">Email</label>
                <input className="block outline-navy ps-3 outline mb-2 rounded-md py-2" value={formData.email} type="email" name="email" autoFocus onChange={handleChange} />
                <label className="block">Password</label>
                <input className="block outline-navy ps-3 outline mb-2 rounded-md py-2" value={formData.password} type="password" name="password" onChange={handleChange} />
                <button className="p-3 bg-orange rounded-lg px-10">Login</button>
            </form>
        </div>
    )
}

export default LoginExample;