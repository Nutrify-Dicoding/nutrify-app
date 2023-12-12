import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);
	const [user, setUser] = useState({});
	const [isFetching, setIsFetching] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.get('/profile', config)
			.then((res) => {
				if (res.status === 200) setUser(res.data.profile);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, [token, navigate, dispatch]);
	return (
		<section className="pt-24 px-[6.25%] text-navy transition-all mb-20 sm:mb-12">
			<div className="border p-4 rounded-lg mt-2 flex justify-between tab:flex-col">
				<div className="flex items-center">
					<img className="rounded-full w-[70px] h-[70px] tab:w-[56px] tab:h-[56px]" src="/icons/user.png" alt="User Profile" />
					<div className="ms-3">
						<div className="font-semibold text-lg">{user.username}</div>
						<div className="text-sm">{user.email}</div>
					</div>
				</div>
				<div className="tab:mt-4 items-center flex gap-3 tab:justify-center">
					<Link to="/alltrack" className="p-3 sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg text-sm flex sm:w-10 sm:h-10">
						<img src="/icons/vector.svg" className="inline me-2 sm:me-0" alt="Tracking" />
						<p className="sm:hidden">Tracking</p>
					</Link>
					<Link to="/profile/ubah-password" className="p-3 sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg text-sm flex sm:w-10 sm:h-10">
						<img src="/icons/lock-on.svg" className="inline me-2 sm:me-0" alt="Edit" />
						<p className="sm:hidden">Ubah Password</p>
					</Link>
					<Link to="/profile/edit" className="p-3 sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg text-sm flex sm:w-10 sm:h-10">
						<img src="/icons/mode_edit_24px.svg" className="inline me-2 sm:me-0" alt="Edit" />
						<p className="sm:hidden">Edit Profile</p>
					</Link>
				</div>
			</div>
			<div className="border p-4 rounded-lg mt-7">
				<div className="font-semibold border-b pb-2 text-xl">Informasi Pribadi</div>
				<div className="grid grid-cols-3 sm:grid-cols-1">
					<div>
						<div className="font-medium mt-5">Email</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent' : ''}`}>
							{user.email}
						</div>
					</div>
					<div>
						<div className="font-medium mt-5">Jenis Kelamin</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent' : ''}`}>
							{user.gender}
						</div>
					</div>
					<div>
						<div className="font-medium mt-5">Umur</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent' : ''}`}>
							{user.umur} Tahun
						</div>
					</div>
					<div>
						<div className="font-medium mt-5">Berat Badan</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent' : ''}`}>
							{user.berat} Kilogram
						</div>
					</div>
					<div>
						<div className="font-medium mt-5">Tinggi Badan</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent' : ''}`}>
							{user.tinggi} Centimeter
						</div>
					</div>
					<div>
						<div className="font-medium mt-5">Tingkat Kegiatan</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent' : ''}`}>
							<span className={`${user.levelActivity === 1 ? 'block' : 'hidden'}`}>sangat ringan (0 x olahraga / minggu)</span>
							<span className={`${user.levelActivity === 2 ? 'block' : 'hidden'}`}>ringan (1-3 x olahraga / minggu)</span>
							<span className={`${user.levelActivity === 3 ? 'block' : 'hidden'}`}>sedang (3-5 x olahraga / minggu)</span>
							<span className={`${user.levelActivity === 4 ? 'block' : 'hidden'}`}>berat (5-6 x olahraga / minggu)</span>
							<span className={`${user.levelActivity === 5 ? 'block' : 'hidden'}`}>sangat berat (2 x olahraga / sehari)</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Profile;
