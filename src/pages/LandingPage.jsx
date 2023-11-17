import Button from "../components/buttons/Button";
const LandingPage = () => {
	return (
		<>
			<section className="px-[6.25%] w-full h-screen">
				<div className="flex h-full flex-row justify-between items-center pt-[4rem]">
					<div className="w-[42%]">
						<h1 className=" text-5xl text-navy font-bold">
							Gizi yang Tepat, Hidup yang <span className="text-orange">Lebih Baik!</span>{" "}
						</h1>
						<div className="">
							<img src="" alt="" />
						</div>
						<p className="leading-8 mt-6 mb-8">
							Temukan rahasia kesehatan melalui informasi gizi akurat dan inspirasi untuk perubahan positif dalam hidup Anda.
						</p>
						<Button buttonText={"Mulai Sekarang"} />
					</div>
					<div className="pt-5 relative">
						<div className="w-[420px] h-[420px] aspect-square relative z-[5]">
							<img className="w-full h-full" src="/images/landing-page/hero-image.png" alt="Hero Image" />
						</div>
						<img
							className="h-[110px] absolute bottom-0 left-[-8%] z-0"
							src="/images/landing-page/liuk-grey.svg"
							alt="Meliuk-liuk"
							draggable={false}
						/>
						<img
							className="absolute h-[200px] top-[9%] left-[-16%] z-0"
							src="/images/landing-page/titik-grey.svg"
							alt="Titik Grey"
							draggable={false}
						/>
						<img
							className="absolute h-[200px] bottom-[-3%] right-[3%] z-0"
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
