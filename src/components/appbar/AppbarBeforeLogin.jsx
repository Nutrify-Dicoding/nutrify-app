import ButtonLogin from '../buttons/ButtonLogin';
import ButtonSignup from '../buttons/ButtonSignup';

const AppbarBeforeLogin = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 border-b-[1px] w-full px-[6.25%] fixed m-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/icons/nutrify-logo.svg"
              alt=""
              width={168}
              height={68}
            />
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden md:flex flex-row gap-2 ">
              <ButtonLogin />
              <ButtonSignup />
            </div>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-black hover:text-orange rounded md:bg-transparent md:text-orange-700 md:dark:text-orange-500"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-orange hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 ">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-orange hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppbarBeforeLogin;
