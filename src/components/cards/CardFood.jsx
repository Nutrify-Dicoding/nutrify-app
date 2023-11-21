/* eslint-disable react/prop-types */
const CardFood = ({ name, description, fat, calorie, protein, carbohydrate }) => {
	return (
		<div className="col-span-1 mx-auto bg-white rounded-lg shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)]">
			<img className="rounded-t-lg w-full" src="https://i.ibb.co/YbZR8mc/Group-40.png" alt="" />
			<div className="pt-5 pb-7 px-[14px] sm:px-[10px] ">
				<h3 className="text-xl font-semibold text-navy">{name}</h3>
				<p className="text text-navy opacity-80">{description}</p>
				<div className="w-full flex flex-row gap-5 justify-around mt-4 sm:gap-4">
					<div className="text-xs flex justify-center gap-1 items-center text-navy">
						<img src="/icons/cloud-meatball-solid.svg" className="inline h-[18px] sm:h-4" /> {fat}
					</div>
					<div className="text-xs  flex justify-center gap-1 items-center text-navy">
						<img src="/icons/fire-solid.svg" className="inline h-[18px] sm:h-4" /> {calorie}
					</div>
					<div className="text-xs flex justify-center gap-1 items-center  text-navy">
						<img src="/icons/dna-solid.svg" className="inline h-[18px] sm:h-4" /> {protein}
					</div>
					<div className="text-xs flex justify-center gap-1 items-center  text-navy">
						<img src="/icons/wheat-awn-solid.svg" className="inline h-[18px] sm:h-4" /> {carbohydrate}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardFood;
