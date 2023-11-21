const Banner = () => {
	return (
		<div className="w-full h-[300px] tab:h-[250px] sm:h-[200px] pl-10 sm:pl-5 md:mt-32 mt-36 flex items-center bg-[url('images/banner-nutrify.png')] bg-no-repeat bg-center bg-cover rounded-[20px]">
			<div className="">
				<p className="text-4xl font-bold text-white sm:text-mobile-4xl">
					Hello <span className="text-orange">Agustin</span>{' '}
				</p>
				<p className="text-lg text-white-200">Jangan lupa penuhi nutrisi harianmu ya!</p>
			</div>
		</div>
	);
};

export default Banner;
