import { Link } from 'react-router-dom';

const Profile = () => {
	return (
		<section className="pt-24 px-[6.25%] text-navy transition-all mb-20 sm:mb-12">
			<div className="border p-4 rounded-lg mt-2 flex items-center md:items-start">
				<div>
					<img className="rounded-full me-4 w-[70px] h-[70px]" src="https://picsum.photos/70/70" alt="User Profile" />
				</div>
				<div className="flex md:block justify-between w-full">
					<div className="ms-3">
						<div className="font-semibold text-lg">Nama User</div>
						<div className="text-sm">contact@gmail.com</div>
					</div>
					<div className="sm:pt-4 items-center flex">
						<Link to={'/track'} className="p-3 sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg me-3 text-sm">
							<img src="/icons/vector.svg" className="inline me-2" />
							Tracking
						</Link>
						<Link to={'/edit-profile'} className="p-3 sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg text-sm">
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
						<div className="text-sm">contact@gmail.com</div>
					</div>
					<div>
						<div className="font-medium mt-5">Jenis Kelamin</div>
						<div className="text-sm">Perempuan</div>
					</div>
					<div>
						<div className="font-medium mt-5">Umur</div>
						<div className="text-sm">16 Tahun</div>
					</div>
					<div>
						<div className="font-medium mt-5">Berat Badan</div>
						<div className="text-sm">40 Kilogram</div>
					</div>
					<div>
						<div className="font-medium mt-5">Tinggi Badan</div>
						<div className="text-sm">165 Centimeter</div>
					</div>
					<div>
						<div className="font-medium mt-5">Tingkat Kegiatan</div>
						<div className="text-sm">Rendah</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Profile;
