/* eslint-disable jsx-a11y/no-autofocus */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuth } from '../redux/slices/authSlice';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: 'xyz@gmail.com',
        password: 'xyz@gmail.com',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        axios.post('/signin', formData).then((response) => {
            if (response.status === 200 && response.data.body.token) {
                dispatch(
                    setAuth({
                        token: response.data.body.token,
                        username: response.data.body.username,
                        isAuthenticated: true,
                        userInfo: response.data.body,
                    }),
                );
                toast.success(response.data.message, { position: 'bottom-right' });
                navigate('/');
            } else {
                toast.error(response.data.message ?? 'Something went wrong', { position: 'bottom-right' });
            }
        }).finally(() => setLoading(false));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div style={{ backgroundImage: 'url(/images/Background.png)' }} className="bg-cover bg-center h-screen w-full grid place-items-center">
            <div className="w-[58%] lg:w-[68%] tab:w-[78%] flex sm:flex-col bg-white/10 backdrop-blur-[5px] rounded-2xl overflow-hidden">
                <div className="w-[48.6%] sm:w-full h-[400px] sm:h-[185px] aspect-square">
                    <img src="/images/login1.png" alt="background" className="w-full h-full object-cover" />
                </div>
                <div className="w-[51.4%] sm:w-full flex flex-col justify-center p-10 shadow-lg">
                    <h1 className="text-2xl">
                        <span className="text-white mr-[4px] font-bold">Login</span>
                        <span className="text-[#FB8500] font-bold">Now!</span>
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-1">
                        <input
                            type="email"
                            className="block w-full mt-3 rounded-md h-11 p-4 placeholder-[#002140]"
                            placeholder="Email"
                            autoFocus
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="block w-full mt-5 rounded-md h-11 p-4 placeholder-[#002140]"
                            placeholder="Password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                        />
                        <button type="submit" className={`mt-5 text-xs w-full bg-[#FB8500] px-2 py-1 h-11 rounded-md text-white transition-all duration-75 ${loading ? 'cursor-wait bg-[#d66f00f5]' : 'cursor-pointer'}`}>Login</button>
                    </form>
                    <p className="mt-3 text-xs text-white text-center">
                        Belum punya akun?
                        {' '}
                        <Link to="/signup" className="text-[#FB8500] font-bold">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
