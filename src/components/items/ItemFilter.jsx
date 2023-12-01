import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ItemFilter = ({ category, id }) => {
	const CategoryId = useSelector((state) => state.foodsFilter.byCategoryId)
	return (
		<button className={`w-28 h-11 rounded-full flex justify-center items-center ${CategoryId == id ? 'bg-white-400' : 'bg-white-100'}`}>
			<p className="text-sm text-navy opacity-80">{category}</p>
		</button>
	);
};

export default ItemFilter;
