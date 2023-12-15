import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function CardFood({ id, name, description, fat, calorie, protein, carbohydrate, image }) {
	return (
		<Link to={`/foods/${id}`} className="col-span-1 mx-auto w-full bg-white rounded-lg shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)]">
			<div className="h-full flex flex-col justify-between">
				<div>
					<img
						className="rounded-t-lg w-full max-h-[150px] sm:max-h-[120px] object-cover bg-slate-200 h-[150px]"
						src={image || 'https://picsum.photos/265/150'}
						alt={name}
						loading="lazy"
					/>
					<div className="pt-5 sm:pt-2 pb-4 sm:pb-2 px-[14px] sm:px-[10px] ">
						<h3 className="text-xl sm:text-base font-semibold text-navy">{name}</h3>
						<div className="flex flex-col h-full justify-between">
							<p className="text-sm sm:text-xs text-navy opacity-80">
								{description.length > 45 ? `${description.slice(0, 45)}...` : description}
							</p>
						</div>
					</div>
				</div>
				<div className="px-2">
					<div className="w-full grid grid-cols-4 gap pb-4">
						<div className="text-sm sm:text-[10px] flex justify-center gap-1 items-center text-navy">
							<img src="/icons/cloud-meatball-solid.svg" className="inline h-[18px] sm:h-3" alt="fat" /> {parseInt(fat)}
						</div>
						<div className="text-sm sm:text-[10px] flex justify-center gap-1 items-center text-navy">
							<img src="/icons/fire-solid.svg" className="inline h-[18px] sm:h-3" alt="calorie" /> {parseInt(calorie)}
						</div>
						<div className="text-sm sm:text-[10px] flex justify-center gap-1 items-center  text-navy">
							<img src="/icons/dna-solid.svg" className="inline h-[18px] sm:h-3" alt="protein" /> {parseInt(protein)}
						</div>
						<div className="text-sm sm:text-[10px] flex justify-center gap-1 items-center  text-navy">
							<img src="/icons/wheat-awn-solid.svg" className="inline h-[18px] sm:h-3" alt="carbohydrate" /> {parseInt(carbohydrate)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default CardFood;
