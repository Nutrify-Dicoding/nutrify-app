/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/buttons/Button';

function ChangePassword() {
	const token = useSelector((state) => state.auth.token);
	const breadcrumbItems = [
		{ label: 'Profile', url: '/profile' },
		{ label: 'Edit Password', url: '#' },
	];
	const [formData, setFormData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const submit = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
			toast.error('Please fill all fields!', { position: 'bottom-right' });
		} else if (formData.newPassword !== formData.confirmPassword) {
			toast.error('New password and password confirmation do not match!', { position: 'bottom-right' });
		} else {
			axios.put('/profile/change-password', formData, config)
				.then((res) => {
					if (res.status === 200 && res.data) {
						toast.success('Password changed successfully!', { position: 'bottom-right' });
					} else {
						toast.error(res.data.message ?? 'Something went wrong', { position: 'bottom-right' });
					}
				});
		}
	};
	return (
		<section className="pt-24 px-[6.25%] text-navy mb-20 sm:mb-12">
			<Breadcrumb items={breadcrumbItems} />
			<div className="border p-5 rounded-lg mt-2">
				<div className="font-semibold border-b pb-2 text-xl">Ubah Password</div>
				<div className="grid grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
					<div className="sm:pe-0">
						<div className="font-medium">Password Saat ini</div>
						<input
							name="currentPassword"
							className="p-3 w-full bg-white-100 rounded focus:outline-white-400"
							type="password"
							onChange={handleInputChange}
						/>
					</div>
					<div className="sm:pe-0">
						<div className="font-medium">Password Baru</div>
						<input
							name="newPassword"
							className="p-3 w-full bg-white-100 rounded focus:outline-white-400"
							type="password"
							onChange={handleInputChange}
						/>
					</div>
					<div className="sm:pe-0">
						<div className="font-medium">Konfirmasi Password</div>
						<input
							name="confirmPassword"
							className="p-3 w-full bg-white-100 rounded focus:outline-white-400"
							type="password"
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</div>
			<div className="text-center mt-12 mb-16">
				<div onClick={() => submit()}>
					<Button buttonText="Ubah Password" />
				</div>
			</div>
		</section>
	);
}

export default ChangePassword;
