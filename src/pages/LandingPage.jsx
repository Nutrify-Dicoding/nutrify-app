import Button from '../components/buttons/Button';
const LandingPage = () => {
	return (
		<>
			<section className="px-[6.25%] w-full h-screen tab:h-full tab:pt-[4rem]">
				<div className="flex h-full flex-row justify-between items-center pt-[4rem]">
					<div className="w-[42%] tab:w-[50%] md:w-full md:flex md:flex-col md:items-center">
						<h1 className=" text-5xl text-navy font-bold lg:text-4xl tab:text-3xl md:text-mobile-5xl">
							Gizi yang Tepat, Hidup yang <span className="text-orange">Lebih Baik!</span>{' '}
						</h1>
						<div className="hidden relative md:block md:w-[300px] md:h-[300px] md:mt-6">
							<div className="md:w-[300px] md:h-[300px] aspect-square relative z-[5] lg:w-[336px] lg:h-[336px] tab:w-[275px] tab:h-[275px] ">
								<img className="w-full h-full" src="/images/landing-page/hero-image.png" alt="Hero Image" />
							</div>
							<img
								className="absolute bottom-0 left-[-8%] z-0 md:h-[72px]"
								src="/images/landing-page/liuk-grey.svg"
								alt="Meliuk-liuk"
								draggable={false}
							/>
							<img
								className="absolute h-[200px] top-[9%] md:left-[-10%] z-0 lg:h-[160px] tab:h-[131px]"
								src="/images/landing-page/titik-grey.svg"
								alt="Titik Grey"
								draggable={false}
							/>
							<img
								className="absolute h-[200px] bottom-[-3%] right-[3%] z-0 lg:h-[160px] tab:h-[131px]"
								src="/images/landing-page/titik-orange.svg"
								alt="Titik Grey"
								draggable={false}
							/>
						</div>
						<p className="text-navy leading-8 mt-8 mb-8 lg:leading-7">
							Temukan rahasia kesehatan melalui informasi gizi akurat dan inspirasi untuk perubahan positif dalam hidup Anda.
						</p>
						<Button buttonText={'Mulai Sekarang'} />
					</div>
					<div className="pt-5 relative md:hidden">
						<div className="w-[420px] h-[420px] aspect-square relative z-[5] lg:w-[336px] lg:h-[336px] tab:w-[275px] tab:h-[275px] ">
							<img className="w-full h-full" src="/images/landing-page/hero-image.png" alt="Hero Image" />
						</div>
						<img
							className="h-[110px] absolute bottom-0 left-[-8%] z-0 lg:h-[88px] tab:h-[72px]"
							src="/images/landing-page/liuk-grey.svg"
							alt="Meliuk-liuk"
							draggable={false}
						/>
						<img
							className="absolute h-[200px] top-[9%] left-[-16%] z-0 lg:h-[160px] tab:h-[131px]"
							src="/images/landing-page/titik-grey.svg"
							alt="Titik Grey"
							draggable={false}
						/>
						<img
							className="absolute h-[200px] bottom-[-3%] right-[3%] z-0 lg:h-[160px] tab:h-[131px]"
							src="/images/landing-page/titik-orange.svg"
							alt="Titik Grey"
							draggable={false}
						/>
					</div>
				</div>
			</section>
			<section className="px-[6.25%] py-[5rem] sm:py-12">
				<div className="text-navy mb-12 sm:mb-8">
					<h2 className="text-4xl font-bold sm:text-mobile-4xl">
						Fitur <span className="text-orange">Unggulan</span> Kami
					</h2>
					<p className="opacity-90 sm:leading-7">Temukan keunggulan kami dalam memfasilitasi perjalanan kesehatan Anda</p>
				</div>
				<div className="grid grid-cols-4 gap-5 lg:grid-cols-3 tab:grid-cols-2 sm:grid-cols-1">
					<div className="border-[1.5px] border-navy/80 rounded-[10px] text-navy overflow-hidden">
						<div className="p-7">
							<img src="/images/landing-page/nutrisi.svg" alt="Icon Nutrisi" />
							<h3 className="text-xl mt-4 mb-3 font-semibold">Nutrisi Optimal </h3>
							<p className="leading-8 opacity-80">Penuhi target nutrisi makanan harian kamu!</p>
						</div>
						<div className="w-full h-[112px] bg-no-repeat bg-center bg-cover bg-[url('images/landing-page/ilustrasi-nutrisi.svg')] border-t-[1.5px] border-navy/80"></div>
					</div>
					<div className="border-[1.5px] border-navy/80 rounded-[10px] text-navy overflow-hidden">
						<div className="p-7">
							<img src="/images/landing-page/peta-nutrisi.svg" alt="Icon Nutrisi" />
							<h3 className="text-xl mt-4 mb-3 font-semibold">Peta Nutrisi</h3>
							<p className="leading-8 opacity-80">Detail makanan dengan jumlah nutrisi</p>
						</div>
						<div className="w-full h-[112px] bg-no-repeat bg-center bg-cover bg-[url('images/landing-page/ilustrasi-peta-nutrisi.svg')] border-t-[1.5px] border-navy/80"></div>
					</div>
					<div className="border-[1.5px] border-navy/80 rounded-[10px] text-navy overflow-hidden">
						<div className="p-7">
							<img src="/images/landing-page/hitung-sehat.svg" alt="Icon Nutrisi" />
							<h3 className="text-xl mt-4 mb-3 font-semibold">Hitung Sehat</h3>
							<p className="leading-8 opacity-80">Hitung jumlah nutrisi tiap makanan dipilih</p>
						</div>
						<div className="w-full h-[112px] bg-no-repeat bg-center bg-cover bg-[url('images/landing-page/ilustrasi-hitung-sehat.svg')] border-t-[1.5px] border-navy/80"></div>
					</div>
					<div className="border-[1.5px] border-navy/80 rounded-[10px] text-navy overflow-hidden">
						<div className="p-7">
							<img src="/images/landing-page/berat-seimbang.svg" alt="Icon Nutrisi" />
							<h3 className="text-xl mt-4 mb-3 font-semibold">Berat Ideal</h3>
							<p className="leading-8 opacity-80">Capai berat badan ideal terbaikmu!</p>
						</div>
						<div className="w-full h-[112px] bg-no-repeat bg-center bg-cover bg-[url('images/landing-page/ilustrasi-berat-seimbang.svg')] border-t-[1.5px] border-navy/80"></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
