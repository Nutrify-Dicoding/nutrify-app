import ItemFilter from '../items/ItemFilter';

const FilterContainer = () => {
  const categories = [
    'Main Dish',
    'Dessert',
    'Bon Appetite',
    'Drinks',
    'Vegetarian',
    'Meat',
    'Soup',
  ];
  return (
    <div className="flex flex-row overflow-hidden justify-between mt-10">
      {categories.map((category, i) => {
        return <ItemFilter key={i} category={category} />;
      })}
    </div>
  );
};

export default FilterContainer;
