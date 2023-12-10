import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import background from '../assets/Background.png';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		gender: 'pria',
		tinggi: '',
		berat: '',
		umur: '',
		password: '',
		confirm_password: '',
		levelActivity: 1,
	});
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const setGenderChoice = (choice) => {
		setFormData({
			...formData,
			gender: choice.target.value,
		});
	};
	const setlevelActivity = (choice) => {
		setFormData({
			...formData,
			levelActivity: choice.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		// check all field is filled
		const keys = Object.keys(formData);
		const values = Object.values(formData);
		for (let i = 0; i < keys.length; i++) {
			if (values[i] === '') {
				toast.error('Please complete all fields!', { position: 'bottom-right' });
				return;
			}
		}

		// check password and confirm password is same
		if (formData.password !== formData.confirm_password) {
			toast.error('Password and confirm password do not match!', { position: 'bottom-right' });
			return;
		}
		// eslint-disable-next-line no-unused-vars
		const { confirm_password, ...formDataWithoutConfirmPassword } = formData;
		setLoading(true);
		axios
			.post(`/signup`, formDataWithoutConfirmPassword)
			.then((res) => {
				if (res.status === 201) {
					toast.success(res.data.message, { position: 'bottom-right' });
					navigate('/login');
				} else {
					toast.error(res.data.message ?? 'Something went wrong', { position: 'bottom-right' });
				}
			})
			.catch((err) => {
				toast.error(err.response.data.message ?? 'Something went wrong', { position: 'bottom-right' });
			}).finally(() => setLoading(false));
	};
	return (
		<>
			<div
				style={{ backgroundImage: `url(${background})` }}
				className="flex items-center justify-center w-full h-screen z-[2] bg-no-repeat bg-center bg-cover sm:overflow-y-scroll sm:py-9"
			>
				<div className="flex w-[58%] lg:w-[68%] tab:w-[78%] sm:mt-40">
					<div className="w-full px-[60px] sm:px-8 py-8 bg-white/10 backdrop-blur-[5px] rounded-md shadow-lg">
						<h1 className=" text-2xl mb-4">
							<span className="text-white mr-[4px] font-bold">Register</span>
							<span className="text-[#FB8500] font-bold">Now!</span>
						</h1>
						<form onSubmit={handleSubmit} className="flex flex-wrap">
							<div className="grid grid-cols-2 sm:grid-cols-1 gap-5 w-full">
								<div>
									<label htmlFor="nama" className="text-white text-sm block mb-1">
										Nama Lengkap
									</label>
									<input
										type="text"
										className="block w-full rounded-md h-11 p-3 placeholder-[#002140] text-sm"
										placeholder="Nama Lengkap"
										value={formData.username}
										name="username"
										autoFocus
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor="email" className="text-white text-sm block mb-1">
										Email
									</label>
									<input
										type="email"
										className="block w-full rounded-md h-11 p-3 placeholder-[#002140] text-sm"
										placeholder="Email"
										value={formData.email}
										name="email"
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor="password" className="text-white text-sm block mb-1">
										Password
									</label>
									<input
										type="password"
										className="block w-full rounded-md h-11 p-3 placeholder-[#002140] text-sm"
										placeholder="Password"
										value={formData.password}
										name="password"
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor="password" className="text-white text-sm block mb-1">
										Konfirmasi Password
									</label>
									<input
										type="password"
										className="block w-full rounded-md h-11 p-3 placeholder-[#002140] text-sm"
										placeholder="Konfirmasi Password"
										value={formData.confirm_password}
										name="confirm_password"
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor="gender" className="text-white text-sm block mb-1">
										Jenis Kelamin
									</label>
									<select
										onChange={(choice) => setGenderChoice(choice)}
										name="gender"
										className="block w-full rounded-md h-11 ps-3 placeholder-[#002140] text-sm"
									>
										<option value="pria">Pria</option>
										<option value="wanita">Wanita</option>
									</select>
								</div>
								<div>
									<label htmlFor="kegiatan" className="text-white text-sm block mb-1">
										Tingkat Kegiatan
									</label>
									<select
										onChange={(choice) => setlevelActivity(choice)}
										name="gender"
										className="block w-full rounded-md h-11 ps-3 placeholder-[#002140] text-sm"
									>
										<option value="1">sangat ringan (0 x olahraga / minggu)</option>
										<option value="2">ringan (1-3 x olahraga / minggu)</option>
										<option value="3">sedang (3-5 x olahraga / minggu)</option>
										<option value="4">berat (5-6 x olahraga / minggu)</option>
										<option value="5">sangat berat (2 x olahraga / sehari)</option>
									</select>
								</div>
							</div>
							<div className="grid grid-cols-3 sm:grid-cols-1 gap-5 mt-5 w-full">
								<div>
									<label htmlFor="bb" className="text-white text-sm block mb-1">
										Berat Badan
									</label>
									<input
										type="number"
										className="block w-full rounded-md h-11 p-3 placeholder-[#002140] text-sm"
										placeholder="Berat Badan"
										value={formData.berat}
										name="berat"
										onChange={handleChange}
									/>{' '}
								</div>
								<div>
									<label htmlFor="tb" className="text-white text-sm block mb-1">
										Tinggi Badan
									</label>
									<input
										type="number"
										className="block w-full rounded-md h-11 p-3 placeholder-[#002140] text-sm"
										placeholder="Tinggi Badan"
										value={formData.tinggi}
										name="tinggi"
										onChange={handleChange}
									/>
								</div>
								<div>
									<label htmlFor="umur" className="text-white text-sm block mb-1">
										Umur
									</label>
									<input
										type="number"
										className="block w-full rounded-md h-11 p-3 placeholder-[#002140] text-sm"
										placeholder="Umur"
										value={formData.umur}
										name="umur"
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="mt-6 w-full flex justify-center">
								<button className={`text-[0.90rem] w-[16rem] sm:w-full bg-[#FB8500] px-2 py-1 h-11 rounded-md text-white transition-all duration-75 ${loading?'cursor-wait bg-[#D66D00]':'cursor-pointer'}`}>
									Register
								</button>
							</div>
						</form>
						<p className="mt-4 text-xs text-white text-center">
							Sudah punya akun?{' '}
							<Link to="/login" className="text-[#FB8500] font-bold">
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
