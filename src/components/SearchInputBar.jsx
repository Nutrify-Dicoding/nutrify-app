import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilter } from '../redux/slices/foodsFilterSlice';

function SearchInputBar() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (window.location.pathname !== '/') {
                navigate('/');
            }
            dispatch(setFilter({
                byName: query,
            }));
        }
    };

    return (
        <div className="relative block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
            <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Cari Makanan..."
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default SearchInputBar;
