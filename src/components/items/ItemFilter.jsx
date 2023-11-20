// eslint-disable-next-line react/prop-types
const ItemFilter = ({ category }) => {
	return (
		<div className=" w-28 h-11 rounded-full bg-white-100 flex justify-center items-center">
			<p className="text-sm text-navy opacity-80">{category}</p>
		</div>
	);
};

export default ItemFilter;
