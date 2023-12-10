import { useState } from 'react';
import ButtonLogin from '../buttons/ButtonLogin';
import ButtonSignup from '../buttons/ButtonSignup';
import { Link } from 'react-router-dom';

const AppbarBeforeLogin = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<>
			<nav className="bg-white border-gray-200 border-b-[1px] w-full px-[6.25%] fixed m-0 z-10">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
					<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
						<img src="/icons/nutrify-logo.svg" alt="" width={168} height={68} />
					</Link>

					<div className="flex order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<div className="md:me-5 flex flex-row gap-2 sm:hidden">
							<Link to={'/login'}>
								<ButtonLogin />
							</Link>
							<Link to={'/signup'}>
								<ButtonSignup />
							</Link>
						</div>

						<button onClick={() => setNavbarOpen(!navbarOpen)}
							data-collapse-toggle="navbar-cta"
							type="button"
							className="md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-cta"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
					</div>
					<div className={`items-center justify-between md:w-full flex w-auto md:order-3 overflow-hidden md:max-h-0 ${navbarOpen ? 'md:max-h-[300px]' : ''}`} id="navbar-cta">
						<ul className={`flex md:flex-col space-x-8 md:space-x-0 font-medium md:p-4 p-0 md:mt-4 rounded-lg md:bg-gray-50 rtl:space-x-reverse flex-row mt-0 md:border-0 bg-white md:w-full transition-all ease-out duration-700 md:overflow-hidden md:max-h-0 ${navbarOpen ? 'md:max-h-[300px]' : ''}`}>
							<li>
								<Link
									to="/"
									className="block py-2 px-3 p-0 text-black hover:text-orange rounded bg-transparent md:text-orange-700 md:dark:text-orange-500 hover:bg-gray-100"
									aria-current="page"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to={'/advice'}
									className="block py-2 px-3 p-0 text-black hover:text-orange rounded bg-transparent md:text-orange-700 md:dark:text-orange-500 hover:bg-gray-100"
								>
									Guide
								</Link>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 p-0 text-black hover:text-orange rounded bg-transparent md:text-orange-700 md:dark:text-orange-500 hover:bg-gray-100"
								>
									Services
								</a>
							</li>
							<li>
								<div className="md:ms-2 pt-2 hidden sm:flex flex-row gap-2">
									<Link to={'/login'} onClick={() => setNavbarOpen(!navbarOpen)}>
										<ButtonLogin />
									</Link>
									<Link to={'/signup'} onClick={() => setNavbarOpen(!navbarOpen)}>
										<ButtonSignup />
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default AppbarBeforeLogin;
