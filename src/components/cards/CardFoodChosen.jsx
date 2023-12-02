import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NutritionWrap = ({ name, icon, value }) => {
	return (
		<div className="h-14 flex flex-col justify-center  items-center py-2 ">
			<p className="text-navy font-medium opacity-90 sm:text-sm">{name}</p>
			<div className="flex flex-row justify-center gap-2 items-center">
				<img className="h-[18px]" src={`/icons/${icon}`} alt={`Icon ${name}`} />
				<p className="font-semibold text-cyan-900 sm:text-sm">{value}</p>
			</div>
		</div>
	);
};
const CardFoodChosen = () => {
	const [porsi, setPorsi] = useState(0);

	const hanldeMinPorsi = () => {
		if (porsi > 0) {
			setPorsi((prev) => prev - 1);
		}
	};

	const hanldePlusPorsi = () => {
		setPorsi((prev) => prev + 1);
	};

	return (
		<div className="flex justify-between items-center tab:flex-col w-full mt-5 border border-white-400/60 rounded-[10px] p-4">
			{/* info makanan */}
			<div className="w-[21%] 2lg:w-[27%] tab:flex tab:justify-between tab:items-center tab:w-full">
				<div className="flex flex-row gap-5 items-center">
					<img src="/images/traditional-nasi-lemak.png" alt="Image" className="w-[70px] 2lg:w-14 h-[70px] 2lg:h-14 rounded-full" />
					<div className="flex flex-col h-14 text-navy">
						<p className="text-lg font-semibold ">Nasi Padang</p>
						<p className="text-sm text-slate-500">Makanan Utama</p>
					</div>
				</div>
				<div className="hidden py-2 px-2 rounded-full bg-slate-200 tab:flex flex-row items-center justify-between">
					<button className="w-11 font-bold text-orange-100" onClick={() => hanldeMinPorsi()}>
						-
					</button>
					<p>{porsi}</p>
					<button className="w-11 font-bold text-orange-100" onClick={() => hanldePlusPorsi()}>
						+
					</button>
				</div>
			</div>
			{/* info nutrisi */}
			<div className="w-[55%] tab:w-full tab:mt-2 grid grid-cols-4 gap-5">
				<NutritionWrap name={'Lemak'} icon={'icon-lemak-no-bg.svg'} value={1000} />
				<NutritionWrap name={'Kalori'} icon={'icon-calori-no-bg.svg'} value={1000} />
				<NutritionWrap name={'Protein'} icon={'icon-protein-no-bg.svg'} value={1000} />
				<NutritionWrap name={'Karbohidrat'} icon={'icon-karbo-no-bg.svg'} value={1000} />
			</div>
			{/* pilih porsi */}
			<div className="py-2 px-2 w-[100px] rounded-full bg-slate-200 flex flex-row items-center justify-between tab:hidden">
				<button className="w-11 font-bold text-orange-100" onClick={() => hanldeMinPorsi()}>
					-
				</button>
				<p>{porsi}</p>
				<button className="w-11 font-bold text-orange-100" onClick={() => hanldePlusPorsi()}>
					+
				</button>
			</div>
		</div>
	);
};

export default CardFoodChosen;
