/*eslint linebreak-style: ["error", "unix"]*/
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/buttons/Button';

const ChangePassword = () => {
	const breadcrumbItems = [
		{ label: 'Profile', url: '/profile' },
		{ label: 'Edit Password', url: '#' },
	];
	return (
		<>
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
								value={''}
							/>
						</div>
						<div className="sm:pe-0">
							<div className="font-medium">Password Baru</div>
							<input
								name="newPassword"
								className="p-3 w-full bg-white-100 rounded focus:outline-white-400"
								type="password"
								value={''}
							/>
						</div>
						<div className="sm:pe-0">
							<div className="font-medium">Konfirmasi Password</div>
							<input
								name="confirmPassword"
								className="p-3 w-full bg-white-100 rounded focus:outline-white-400"
								type="password"
								value={''}
							/>
						</div>
					</div>
				</div>
				<div className="text-center mt-12 mb-16">
					<div>
						<Button buttonText="Ubah Password" />
					</div>
				</div>
			</section>
		</>
	);
};

export default ChangePassword;
