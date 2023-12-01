import { useEffect, useState } from 'react';
import ItemFilter from '../items/ItemFilter';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/foodsFilterSlice";

const FilterContainer = () => {
	// const categories = ['Main Dish', 'Dessert', 'Bon Appetite', 'Drinks', 'Vegetarian', 'Meat', 'Soup'];
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get(`/categories`)
			.then((response) => {
				if (response.status === 200) {
					setCategories(
						response.data
					);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const selectCategory = (id) => {
		console.log(id)
		dispatch(setFilter({
			byCategoryId: id,
		}))
	}
	return (
		<div className="flex w-full md:hidden flex-row overflow-hidden gap-[10px] mt-8">
			{categories.map((category, i) => {
				return (
					<div key={i} onClick={() => selectCategory(category._id)}>
						<ItemFilter category={category.name} id={category._id} />
					</div>
				);
			})}
		</div>
	);
};

export default FilterContainer;
