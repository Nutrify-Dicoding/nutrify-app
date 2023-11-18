const AppbarAfterLogin = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 border-b-[1px] w-full px-[6.25%] sticky top-0 z-10">
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
          <div className="relative block md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
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
            />
          </div>
          <div className="flex flex-row gap-5 items-center ">
            <p className="flex sm:hidden cursor-pointer text-base">
              Dashboard
            </p>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <img
                className="w-8 h-8 rounded-full"
                src="/images/user-nutrify.png"
                alt="user photo"
              />
            </button>
            <img
              src="/icons/drop-icon.svg"
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppbarAfterLogin;
