/* eslint-disable react/prop-types */

const CardTrackStats = ({ name, icon, percentase, needed, value, color }) => {
	return (
		<div className="h-52 border border-gray-200 rounded p-5 justify-between flex-col">
			<div className="w-full flex flex-row justify-between items-center h-14 md:h-10 border-b border-gray-200">
				<div className="flex flex-row items-center gap-3">
					<img src={`icons/${icon}`} alt="" />
					<p className="text-gray-500 block font-semibold">{name}</p>
				</div>
				<p className="font-bold text-lg md:text-base">{percentase}</p>
			</div>
			<div className="flex flex-row justify-between items-center h-3/4">
				<p className={`font-bold text-4xl ${color}`}>{value}</p>
				<p className="w-20 block text-sm  text-gray-400">
					<span className="text-green font-bold">{needed < 0 ? -needed : needed}+</span> {needed > 0 ? 'Melebihi dari target' : 'lagi dari target'}
				</p>
			</div>
		</div>
	);
};

export default CardTrackStats;
