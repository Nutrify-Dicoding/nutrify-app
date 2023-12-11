import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchInputBar from '../SearchInputBar';
import { clearAuth } from '../../redux/slices/authSlice';

function AppbarAfterLogin() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated, navigate]);
    const logout = () => {
        dispatch(clearAuth());
        navigate('/login');
    };
    const searchQuery = useSelector((state) => state.foodsFilter.byName);
    useEffect(() => {
        // close dropdown when search query is changed
        if (searchQuery) {
            setIsOpen(false);
        }
    }, [searchQuery]);
    return (
        <nav className="bg-white border-gray-200 border-b-[1px] w-full px-[6.25%] fixed top-0 z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/icons/nutrify-logo.svg" alt="" width={168} height={68} />
                </Link>
                <div className="md:hidden">
                    <SearchInputBar />
                </div>
                <div className="flex flex-row gap-5 items-center ">
                    <Link to="/" className="flex cursor-pointer text-base">
                        <span className="sm:hidden">Home</span>
                        <img className="hidden sm:block" src="/icons/home.svg" alt="Home" />
                    </Link>
                    <Link to="/track" className="flex cursor-pointer text-base">
                        <span className="sm:hidden">Tracking</span>
                        <img className="hidden sm:block" src="/icons/calendar-check.svg" alt="Tracking" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img className="w-8 h-8 rounded-full" src="/images/user-nutrify.png" alt="user" />
                        </button>
                        <div>
                            <img
                                src="/icons/drop-icon.svg"
                                className={`cursor-pointer transition ${isOpen ? 'rotate-180' : ''}`}
                                onClick={() => setIsOpen(!isOpen)}
                                alt="dropdown"
                            />
                            <div className={`absolute ${isOpen ? 'block' : 'hidden'}`}>
                                <ul className="mt-6 ms-[-171px] lg:ms-[-240px] w-[200px] lg:w-[260px]">
                                    <li className="bg-white py-2 px-2 border rounded-t-md hidden sm:block">
                                        <SearchInputBar />
                                    </li>
                                    <li className="bg-white py-2 px-5 border">
                                        <Link to="/profile" onClick={() => setIsOpen(!isOpen)} className="block w-full">
                                            <svg className="inline me-3 text-orange-100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="bg-white py-2 px-5 border">
                                        <Link to="/favorite" onClick={() => setIsOpen(!isOpen)} className="block w-full">
                                            <svg className="inline me-3 text-orange-100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 20c-6.6-6.1-10-9.2-10-12.9C3.5 4 5.9 1.6 9 1.6c1.7 0 3.4.8 4.5 2.1c1.1-1.3 2.8-2.1 4.5-2.1c3.1 0 5.5 2.4 5.5 5.5c0 3.8-3.4 6.9-10 12.9M12 21.1C5.4 15.2 1.5 11.7 1.5 7v-.6c-.6.9-1 2-1 3.2c0 3.8 3.4 6.9 10 12.8l1.5-1.3Z" /></svg>
                                            Favorit
                                        </Link>
                                    </li>
                                    <li className="bg-white py-2 px-5 border rounded-b-md cursor-pointer" onClick={() => logout()}>
                                        <svg className="inline me-3 text-orange-100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5Z" /></svg>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AppbarAfterLogin;
