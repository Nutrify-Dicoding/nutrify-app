import ItemFilter from '../items/ItemFilter';

const FilterContainer = () => {
	const categories = ['Main Dish', 'Dessert', 'Bon Appetite', 'Drinks', 'Vegetarian', 'Meat', 'Soup'];
	return (
		<div className="flex w-full lg:hidden flex-row overflow-hidden gap-[10px] mt-8">
			{categories.map((category, i) => {
				return <ItemFilter key={i} category={category} />;
			})}
		</div>
	);
};

export default FilterContainer;
