import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/buttons/Button';

const EditProfile = () => {
	const breadcrumbItems = [
		{ label: 'Profile', url: '/profile' },
		{ label: 'Edit Profile', url: '#' },
	];
	return (
		<section className="pt-24 px-[6.25%] text-navy mb-20 sm:mb-12">
			<Breadcrumb items={breadcrumbItems} />
			<div className="border p-4 rounded-lg mt-2">
				<div className="font-semibold border-b pb-2 text-xl">Edit Informasi Pribadi</div>
				<div className="grid grid-cols-2 sm:grid-cols-1">
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Email</div>
						<input className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value="contact@gmail.com" />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Jenis Kelamin</div>
						<input className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value="Perempuan" />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Umur</div>
						<input className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value="16 Tahun" />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Berat Badan</div>
						<input className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value="40 Kilogram" />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Tinggi Badan</div>
						<input className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value="165 Centimeter" />
					</div>
					<div className="pe-12 sm:pe-0">
						<div className="font-medium mt-5">Tingkat Kegiatan</div>
						<input className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value="Rendah" />
					</div>
				</div>
			</div>
			<div className="text-center mt-12 mb-16">
				<Button buttonText={'Simpan Data'} />
			</div>
		</section>
	);
};

export default EditProfile;
