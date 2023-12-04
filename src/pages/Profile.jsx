import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token)
	const [user, setUser] = useState({});
	const [isFetching, setIsFetching] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const config = {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		};
		axios.get('/profile', config)
			.then((res) => {
				if (res.status === 200) setUser(res.data.profile);
			})
			.finally(() => {
				setIsFetching(false);
			})
	}, [token, navigate, dispatch]);
	return (
		<section className="pt-24 px-[6.25%] text-navy transition-all mb-20 sm:mb-12">
			<div className="border p-4 rounded-lg mt-2 flex items-center md:items-start">
				<div>
					<img className="rounded-full me-4 w-[70px] h-[70px]" src="/icons/user.png" alt="User Profile" />
				</div>
				<div className="flex md:block justify-between w-full">
					<div className="ms-3">
						<div className="font-semibold text-lg">{user.username}</div>
						<div className="text-sm">{user.email}</div>
					</div>
					<div className="sm:pt-4 items-center flex">
						<Link to={'/alltrack'} className="p-3 sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg me-3 text-sm">
							<img src="/icons/vector.svg" className="inline me-2" />
							Tracking
						</Link>
						<Link to={'/profile/edit'} className="p-3 sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg text-sm">
							<img src="/icons/mode_edit_24px.svg" className="inline me-2" />
							Edit Profile
						</Link>
					</div>
				</div>
			</div>
			<div className="border p-4 rounded-lg mt-7">
				<div className="font-semibold border-b pb-2 text-xl">Informasi Pribadi</div>
				<div className="grid grid-cols-3 sm:grid-cols-1">
					<div>
						<div className="font-medium mt-5">Email</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5' : ''}`}>{user.email}</div>
					</div>
					<div>
						<div className="font-medium mt-5">Jenis Kelamin</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5' : ''}`}>{user.gender}</div>
					</div>
					<div>
						<div className="font-medium mt-5">Umur</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5' : ''}`}>{user.umur} Tahun</div>
					</div>
					<div>
						<div className="font-medium mt-5">Berat Badan</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5' : ''}`}>{user.berat} Kilogram</div>
					</div>
					<div>
						<div className="font-medium mt-5">Tinggi Badan</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5' : ''}`}>{user.tinggi} Centimeter</div>
					</div>
					<div>
						<div className="font-medium mt-5">Tingkat Kegiatan</div>
						<div className={`text-sm ${isFetching ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5' : ''}`}>{user.levelAktivitas ? user.levelAktivitas.ket : ''}</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Profile;
