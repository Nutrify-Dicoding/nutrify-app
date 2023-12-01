import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const CardFood = ({ id, name, description, fat, calorie, protein, carbohydrate, image }) => {
	return (
		<Link to={`/foods/${id}`} className="col-span-1 mx-auto w-full bg-white rounded-lg shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)]">
			<img
				className="rounded-t-lg w-full max-h-[150px] object-cover"
				src={image || 'https://picsum.photos/265/150'}
				alt={name}
				loading="lazy"
			/>
			<div className="pt-5 pb-7 px-[14px] sm:px-[10px] ">
				<h3 className="text-xl sm:text-mobile-xl font-semibold text-navy">{name}</h3>
				<p className="text sm:text-sm text-navy opacity-80">{description}</p>
				<div className="w-full grid grid-cols-4 sm:grid-cols-2 mt-4 sm:gap-4">
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
		</Link>
	);
};

export default CardFood;
