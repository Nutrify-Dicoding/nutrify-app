import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './buttons/Button';
import CardFood from './cards/CardFood';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PlaceholderCardFood from './placeholder/PlaceholderCardFood';

const Recommendation = () => {
	const [foods, setFoods] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const token = useSelector((state) => state.auth.token)
	useEffect(() => {
		setIsFetching(true);
		const config = {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		};
		axios.get('/foods', config).then((res) => {
			if(res.status === 200) setFoods(res.data.food)
		}).finally(() => {
			setIsFetching(false);
		});
	}, [token]);
	return (
		<div className="mt-12 mb-20">
			<p className="font-semibold text-2xl text-navy">
				Makanan Terpopuler
			</p>
			<div className="grid mt-8 sm:grid-cols-1 tab:grid-cols-3 grid-cols-4 gap-5 mb-12">
				{foods.map((item, index) => {
					return <CardFood key={index} id={item._id} name={item.name} description={item.desc} fat={item.fat} calorie={item.cal} protein={item.protein} carbohydrate={item.carb} image={item.image.includes('http') ? item.image : 'https://picsum.photos/265/150'} />;
				})}

				{/* While the data is being retrieved */}
				{isFetching &&
					[...Array(4)].map((_, i) => {
						return (
							<PlaceholderCardFood key={i} />
						);
					})}
			</div>
			<div className="w-full flex justify-center">
				<Link to="/">
					<Button buttonText={'Selengkapnya'} />
				</Link>
			</div>
		</div>
	);
};

export default Recommendation;
