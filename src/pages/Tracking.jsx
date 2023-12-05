import { useDispatch, useSelector } from 'react-redux';
import Recommendation from '../components/Recommendation';
import CardFoodChosen from '../components/cards/CardFoodChosen';
import CardFoodHistory from '../components/cards/CardFoodHistory';
import CardNutritionTrack from '../components/cards/CardNutritionTrack';
import Button from '../components/buttons/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PlaceholderCardFoodHistory from '../components/placeholder/PlaceholderCardFoodHistory';

const Tracking = () => {
	const [foodsSelectedToday, setFoodsSelectedToday] = useState([]);
	const token = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const selectedFood = useSelector((state) => state.selectedFood);
	const userInfo = useSelector((state) => state.auth.userInfo);
	const [nutritionTotal, setNutritionTotal] = useState({});
	const [isFetching, setIsFetching] = useState(true);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios.get('/track/today', config).then((res) => {
			if (res.status === 200 && res.data) {
				setFoodsSelectedToday(res.data.body.tracking.food);
				setNutritionTotal(res.data.body.result);
			}
		}).finally(() => {
			setIsFetching(false);
		});
	}, [token, navigate, dispatch]);
	return (
		<section className="px-[6.25%] w-full tab:h-full tab:pt-[4rem] mt-[7.5rem] tab:mt-14 ">
			<p className="text-2xl font-bold text-navy">Pilih Makanan</p>
			<CardFoodChosen />
			<div className={selectedFood.food_id ? 'hidden' : ''}>
				<div className="col-span-4 flex justify-center py-10 items-center">
					<div className="text-darknavy">
						<h3 className="text-lg font-semibold mb-3">Tidak ada makanan yang dipilih</h3>
						<div className="text-center">
							<Link to={'/'}>
								<Button buttonText={'Pilih Makanan'} />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={`w-full mt-5 grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1`}>
				<CardNutritionTrack
					name={'Lemak'}
					icon={'lemak-icon.svg'}
					percentase={parseInt( nutritionTotal.totFat/userInfo.fatNeeded * 100) + '%'}
					value={nutritionTotal.totFat}
					target={parseInt(userInfo.fatNeeded)}
					text={'Capaian menjadi'}
				/>
				<CardNutritionTrack
					name={'Kalori'}
					icon={'kalori-icon.svg'}
					percentase={parseInt( nutritionTotal.totCal/userInfo.caloriNeeded * 100) + '%'}
					value={nutritionTotal.totCal}
					target={parseInt(userInfo.caloriNeeded)}
					text={'Capaian menjadi'}
				/>
				<CardNutritionTrack
					name={'Protein'}
					icon={'protein-icon.svg'}
					percentase={parseInt( nutritionTotal.totProtein/userInfo.proteinNeeded * 100) + '%'}
					value={nutritionTotal.totProtein}
					target={parseInt(userInfo.proteinNeeded)}
					text={'Capaian menjadi'}
				/>
				<CardNutritionTrack
					name={'Karbohidrat'}
					icon={'carbo-icon.svg'}
					percentase={parseInt( nutritionTotal.totCarb/userInfo.carboNeeded * 100) + '%'}
					value={nutritionTotal.totCarb}
					target={parseInt(userInfo.carboNeeded)}
					text={'Capaian menjadi'}
				/>
			</div>
			<p className="text-navy font-bold mt-8 text-2xl">
				Makanan dipilih hari ini
			</p>
			<div>
				{isFetching &&
					[...Array(3)].map((_, i) => {
						return (
							<PlaceholderCardFoodHistory key={i} />
						);
					})}
				{/* <CardFoodHistory /> */}
				{foodsSelectedToday.map((x, index) => {
					return <CardFoodHistory key={index} data={x.foodId} portion={x.portion} />;
				})}
			</div>
			<Recommendation />
		</section>
	);
};

export default Tracking;
