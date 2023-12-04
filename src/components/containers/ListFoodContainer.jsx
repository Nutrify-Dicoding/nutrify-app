import { useEffect, useState } from 'react';
import CardFood from '../cards/CardFood';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PlaceholderCardFood from '../placeholder/PlaceholderCardFood';

const ListFoodContainer = () => {
	// const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7];
	const foodsFilter = useSelector((state) => state.foodsFilter)
	const [isFetching, setIsFetching] = useState(false);
	const [foods, setFoods] = useState([]);
	const token = useSelector((state) => state.auth.token)
	useEffect(() => {
		let path;
		const config = {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		};
		if (foodsFilter.byCategoryId) {
			path = `/foods/category/${foodsFilter.byCategoryId}`
		} else if (foodsFilter.byName) {
			path = `/foods/search?name=${foodsFilter.byName}`
			document.getElementById('list-food').scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		} else {
			path = `/foods`
		}
		setFoods([]);
		setIsFetching(true);
		axios
			.get(path, config)
			.then((res) => {
				if (res.status === 200) {
					setFoods(res.data.food);
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, [foodsFilter, token]);
	return (
		<div className="w-full grid grid-cols-4 gap-5 mt-10 tab:grid-cols-3 md:grid-cols-2" id='list-food'>
			{foods.map((food) => {
				return <CardFood key={food._id} id={food._id} name={food.name} description={food.desc} fat={food.fat} calorie={food.cal} protein={food.protein} carbohydrate={food.carb} image={food.image.includes('http') ? food.image : 'https://picsum.photos/265/150'} />;
			})}
			{/* If there are no foods */}
			{foods.length === 0 && isFetching!== true && (
				<div className="col-span-4 flex justify-center py-8 items-center">
					<div className="text-darknavy">
						<h3 className="text-2xl font-semibold">No Food Found</h3>
					</div>
				</div>
			)}

			{/* While the data is being retrieved */}
			{isFetching &&
				[...Array(8)].map((_, i) => {
					return (
						<PlaceholderCardFood key={i} />
					);
				})}

		</div>
	);
};

export default ListFoodContainer;
