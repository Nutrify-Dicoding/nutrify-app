import login1 from '../assets/login1.png';
import background from '../assets/background.png';

const Login = () => {
	return (
		<>
			<div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-screen w-full grid place-items-center">
				<div className="">
					<div className="flex">
						<img src={login1} alt="background" className="w-[360px] h-[330px]" />
						<div className="container max-w-sm bg-white bg-opacity-5 backdrop-blur-sm p-10 rounded-md shadow-lg">
							<h1 className='mt-3 text-lg'>
                            <span className="text-white mr-[4px] font-bold">Login</span>
							<span className="text-[#FB8500] font-bold">Now!</span>
                            </h1>
							<form action="" className="mt-1">
								<input
									type="text"
									className="block w-full mt-3 rounded-md h-9 p-5 placeholder-[#002140] text-xs"
									placeholder="Email"
								/>
								<input
									type="password"
									className="block w-full mt-5 rounded-md h-9 p-5 placeholder-[#002140] text-xs"
									placeholder="Password"
								/>
								<button className="mt-5 text-xs w-full bg-[#FB8500] px-2 py-1 h-9 rounded-md text-white">Login</button>
							</form>
							<p className="mt-3 text-xs text-white text-center">
								Belum punya akun?{' '}
								<a href="#" className="text-[#FB8500] font-bold">
									Register
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
