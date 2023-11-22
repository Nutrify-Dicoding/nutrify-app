import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Recommendation from '../components/Recommendation';
import Button from '../components/buttons/Button';

const FoodDetail = () => {
	const [showDescription, setshowDescription] = useState(true);
	const breadcrumbItems = [
		{ label: 'Home', url: '/' },
		{ label: 'Nama Makanan', url: '#' },
	];
	return (
		<>
			<section className="pt-20">
				<div className="2xl:mx-auto">
					<div className="w-full flex tab:flex-col">
						<div className="w-[50%] lg:w-[45%] tab:w-full tab:h-[400px] aspect-video">
							<img className="h-full w-full object-cover" src="https://i.ibb.co/8s9c629/Foto-Makanan.png" alt="food" />
						</div>
						<div className="w-[50%] lg:w-[55%] tab:w-full pr-[6.25%] tab:px-[6.25%] pl-16 sm:px-[6.25%] md:py-5">
							<Breadcrumb items={breadcrumbItems} />

							<h1 className="text-3xl font-semibold text-navy">ini Nama Makanan</h1>
							<ul className="flex mb-5 pt-4 border-b-[1.5px] border-white-100">
								<li className={`me-4 pb-3 cursor-pointer ${showDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
									<a onClick={() => setshowDescription(!showDescription)}>Description</a>
								</li>
								<li className={`me-4 pb-3 cursor-pointer ${!showDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
									<a onClick={() => setshowDescription(!showDescription)}>Nutrisi Lengkap</a>
								</li>
							</ul>
							<div className={`${!showDescription ? 'hidden' : ''}`}>
								<p className="text-navy">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias atque at ea doloremque harum fugit?
									Dolores, aut molestias? Molestias, non. Impedit necessitatibus sint odit illum dolor consectetur voluptate
									excepturi.
								</p>

								<h2 className="text-xl mt-4 mb-2 text-navy font-semibold">Bahan-bahan</h2>
								<p className="text-navy">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod enim dolorem labore. Soluta quae corporis.
								</p>

								<h2 className="text-xl mb-4 mt-4 text-navy font-semibold">Nutrisi Utama</h2>
								<div className="grid  grid-cols-4 lg:grid-cols-2 tab:grid-cols-4 sm:grid-cols-2 gap-8 bg-slate-100 p-4 text-center rounded-lg border-b-[1.5px] border-white-100 ">
									<div>
										<div className="text-navy">
											<img src="/icons/cloud-meatball-solid.svg" className="inline me-2" />
											Lemak
										</div>
										<div className="font-semibold text-navy">1000 g</div>
										<div className="text-xs text-white-500">n% Harian</div>
									</div>
									<div>
										<div className="text-navy">
											<img src="/icons/fire-solid.svg" className="inline me-2" />
											Kalori
										</div>
										<div className="font-semibold text-navy">1000 kkal</div>
										<div className="text-xs text-white-500">n% Harian</div>
									</div>
									<div>
										<div className="text-navy">
											<img src="/icons/dna-solid.svg" className="inline me-2" />
											Protein
										</div>
										<div className="font-semibold text-navy">1000 g</div>
										<div className="text-xs text-white-500">n% Harian</div>
									</div>
									<div>
										<div className="text-navy">
											<img src="/icons/wheat-awn-solid.svg" className="inline me-2" />
											Karbo
										</div>
										<div className="font-semibold text-navy">1000 g</div>
										<div className="text-xs text-white-500">n% Harian</div>
									</div>
								</div>

								<div className="pt-11 flex items-center tab:justify-end">
									<Button buttonText={'Pilih Makanan'} />
									<button className="me-2 ml-4 py-2 px-3 border-orange border-2 rounded-lg">
										<img src="/icons/love.svg" alt="Love Icon" className="inline" />
									</button>
								</div>
							</div>
							<div className={`${showDescription ? 'hidden' : ''}`}>
								<p className="text-navy">
									Nutrisi lengkap, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias atque at ea doloremque
									harum fugit? Dolores, aut molestias? Molestias, non. Impedit necessitatibus sint odit illum dolor consectetur
									voluptate excepturi.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container px-[6.25%] mx-auto mt-16">
					<Recommendation />
				</div>
			</section>
		</>
	);
};
export default FoodDetail;
