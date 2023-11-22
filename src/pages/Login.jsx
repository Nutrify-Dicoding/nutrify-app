import login1 from '../assets/login1.png';
import background from '../assets/background.png';

const Login = () => {
	return (
		<>
			<div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-screen w-full grid place-items-center">
				<div className="">
					<div className="flex">
						<img src={login1} alt="background" className="w-[250px] h-[270px]" />
						<div className="container max-w-sm bg-white bg-opacity-5 backdrop-blur-sm p-10 rounded-md shadow-lg">
							{/* <h1 className="text-3xl font-thin text-center">Form Login</h1> */}
							<span className="text-white mr-[4px] font-bold">Login</span>
							<span className="text-[#FB8500] font-bold">Now!</span>
							<form action="" className="mt-1">
								<input
									type="text"
									className="block w-full mt-3 rounded-md h-9 p-3 placeholder-[#002140] text-xs"
									placeholder="Email"
								/>
								<input
									type="password"
									className="block w-full mt-3 rounded-md h-9 p-3 placeholder-[#002140] text-xs"
									placeholder="Password"
								/>
								<button className="mt-3 text-xs w-full bg-[#FB8500] px-2 py-1 h-8 rounded-md text-white">Login</button>
							</form>
							<p className="mt-3 text-xs text-white">
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
