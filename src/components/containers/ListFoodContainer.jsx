import { useEffect, useState } from 'react';
import CardFood from '../cards/CardFood';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ListFoodContainer = () => {
	// const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7];
	const foodsFilter = useSelector((state) => state.foodsFilter)
	const [isFetching, setIsFetching] = useState(false);
	const [foods, setFoods] = useState([]);
	useEffect(() => {
		let path;
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
			.get(path)
			.then((res) => {
				if (res.status === 200) {
					setFoods(res.data);
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, [foodsFilter]);
	return (
		<div className="w-full grid grid-cols-4 gap-5 mt-10 tab:grid-cols-3 md:grid-cols-2" id='list-food'>
			{foods.map((food) => {
				return <CardFood key={food._id} id={food._id} name={food.name} description={food.desc} fat={food.fat} calorie={food.cal} protein={food.protein} carbohydrate={food.carb} image={food.image} />;
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
						<div key={i} className="col-span-1 mx-auto bg-white animate-pulse rounded-lg shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] w-full">
							<div className="bg-slate-200 h-[150px] w-full rounded-t-lg"></div>
							<div className="pt-5 pb-7 px-[14px] sm:px-[10px]">
								<div className="sm:text-mobile-xl w-1/2 h-5 bg-slate-200 mb-2 rounded"></div>
								<p className="text bg-slate-200 h-5 w-full rounded"></p>
								<div className="w-full flex flex-row gap-5 justify-around mt-5 sm:gap-4 overflow-hidden">
									<div className="flex justify-center gap-1">
										<div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
										</div>
									</div>
									<div className="flex justify-center gap-1">
										<div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
										</div>
									</div>
									<div className="flex justify-center gap-1">
										<div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
										</div>
									</div>
									<div className="flex justify-center gap-1">
										<div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}

		</div>
	);
};

export default ListFoodContainer;
