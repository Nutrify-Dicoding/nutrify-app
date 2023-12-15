/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemFilter from '../items/ItemFilter';
import { setFilter } from '../../redux/slices/foodsFilterSlice';

function FilterContainer() {
	const token = useSelector((state) => state.auth.token);
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios.get('/category', config).then((response) => {
			if (response.status === 200) {
				setCategories(response.data);
			}
		});
	}, [token]);
	const selectCategory = (id) => {
		// console.log(id);
		dispatch(
			setFilter({
				byCategoryId: id,
			}),
		);
	};
	return (
		<div className="flex w-full flex-row overflow-auto gap-[10px] mt-8 scrollbar-hide">
			{categories.map((category, i) => (
				<div key={i} onClick={() => selectCategory(category._id)}>
					<ItemFilter category={category.name} id={category._id} />
				</div>
			))}
		</div>
	);
}

export default FilterContainer;
