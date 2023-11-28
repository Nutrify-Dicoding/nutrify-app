import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/buttons/Button';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
	const token = useSelector((state) => state.auth.token)
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const breadcrumbItems = [
		{ label: 'Profile', url: '/profile' },
		{ label: 'Edit Profile', url: '#' },
	];
	useEffect(() => {
		const config = {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		};
		axios.get('/profile', config)
			.then((res) => {
				if (res.status === 200) setUser(res.data);
			})
			.catch((err) => {
				if (err.response.status === 401) navigate('/auth/signin')
				else console.log(err);
			});
	}, [token, navigate]);
	const handleInputChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
		console.log(user)
	};
	const saveProfile = () => {
		console.log(user)
		const config = {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		};
		axios.put('/profile', user, config)
			.then((res) => {
				if (res.status === 200 && res.data) {
					toast.success(res.data.message, {position: "bottom-right"})
				}
			})
			.catch((err) => {
				if (err.response.status === 401) navigate('/auth/signin')
				else console.log(err);
			});
	}

	return (
		<section className="pt-24 px-[6.25%] text-navy mb-20 sm:mb-12">
			<Breadcrumb items={breadcrumbItems} />
			<ToastContainer />
			<div className="border p-4 rounded-lg mt-2">
				<div className="font-semibold border-b pb-2 text-xl">Edit Informasi Pribadi</div>
				<div className="grid grid-cols-2 sm:grid-cols-1">
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Email</div>
						<input name='email' className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.email || ''} onChange={handleInputChange}
						/>
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Jenis Kelamin</div>
						<select name='gender' onChange={handleInputChange} value={user.gender || ''} className='p-3 w-full bg-white-100 outline-gray-500 focus:outline-white-400'>
							<option value="wanita">Wanita</option>
							<option value="pria">Pria</option>
						</select>

					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Umur</div>
						<input name='umur' onChange={handleInputChange} className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.umur || ''} />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Berat Badan</div>
						<input name='berat' onChange={handleInputChange} className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.berat || ''} />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Tinggi Badan</div>
						<input name='tinggi' onChange={handleInputChange} className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.tinggi | ''} />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Tingkat Kegiatan</div>
						<input name='levelAktivitas' onChange={handleInputChange} className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.levelAktivitas ? user.levelAktivitas.ket : ''} />
					</div>
				</div>
			</div>
			<div className="text-center mt-12 mb-16">
				<div onClick={() => saveProfile()}>
					<Button buttonText={'Simpan Data'} onClick={() => saveProfile()} />
				</div>
			</div>
		</section>
	);
};

export default EditProfile;
