import Button from "../components/buttons/Button";
const LandingPage = () => {
	return (
		<>
			<section className="px-[6.25%] w-full h-screen tab:h-full tab:pt-[4rem]">
				<div className="flex h-full flex-row justify-between items-center pt-[4rem]">
					<div className="w-[42%] tab:w-[50%] md:w-full md:flex md:flex-col md:items-center">
						<h1 className=" text-5xl text-navy font-bold lg:text-4xl tab:text-3xl md:text-mobile-5xl">
							Gizi yang Tepat, Hidup yang <span className="text-orange">Lebih Baik!</span>{" "}
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
						<Button buttonText={"Mulai Sekarang"} />
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
		</>
	);
};

export default LandingPage;
