import { Link, useNavigate } from 'react-router-dom';
import SearchInputBar from '../SearchInputBar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuth } from '../../redux/slices/authSlice';

const AppbarAfterLogin = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuthenticated) navigate('/auth/signin');
	}, [isAuthenticated, navigate]);
	const logout = () => {
		dispatch(clearAuth());
	};
	return (
		<>
			<nav className="bg-white border-gray-200 border-b-[1px] w-full px-[6.25%] fixed top-0 z-10">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
					<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
						<img src="/icons/nutrify-logo.svg" alt="" width={168} height={68} />
					</Link>
					<SearchInputBar></SearchInputBar>
					<div className="flex flex-row gap-5 items-center ">
						<Link to={'/'} className="flex sm:hidden cursor-pointer text-base">
							Home
						</Link>
						<Link to={'/track'} className="flex sm:hidden cursor-pointer text-base">
							Tracking
						</Link>
						<button
							type="button"
							className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
							id="user-menu-button"
							aria-expanded="false"
							data-dropdown-toggle="user-dropdown"
							data-dropdown-placement="bottom"
						>
							<img className="w-8 h-8 rounded-full" src="/images/user-nutrify.png" alt="user photo" />
						</button>
						<div>
							<img
								src="/icons/drop-icon.svg"
								className={`cursor-pointer transition ${isOpen ? 'rotate-180' : ''}`}
								onClick={() => {
									setIsOpen(!isOpen);
								}}
							/>
							{/* sementara */}
							<div className={`absolute ${isOpen ? 'block' : 'hidden'}`}>
								<ul className="mt-4 ms-[-50px] lg:ms-[-80px] bg-white">
									<li className="py-2 px-5 border">
										<Link to={'/profile'}>Profile</Link>
									</li>
									<li className="py-2 px-5 border" role="button" onClick={() => logout()}>
										Logout
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default AppbarAfterLogin;
