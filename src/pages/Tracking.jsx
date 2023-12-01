import { useDispatch, useSelector } from 'react-redux';
import Recommendation from '../components/Recommendation';
import CardFoodChosen from '../components/cards/CardFoodChosen';
import CardFoodHistory from '../components/cards/CardFoodHistory';
import CardNutritionTrack from '../components/cards/CardNutritionTrack';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { errorInterceptor } from '../utils/axiosInterceptor';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/buttons/Button';

const Tracking = () => {
	const [foodsSelectedToday, setFoodsSelectedToday] = useState([]);
	const token = useSelector((state) => state.auth.token)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const selectedFood = useSelector((state) => state.selectedFood)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		const config = {
			headers: {
				'Authorization': `Bearer ${token}`,
			}
		};
		axios.interceptors.response.use(null, (err) => errorInterceptor(err, { navigate, dispatch }));
		axios.get('/tracking/today', config)
			.then((res) => {
				if (res.status === 200 && res.data) {
					setFoodsSelectedToday(res.data.tracking.food);
				}
			})
	}, [token, navigate, dispatch]);
	return (
		<section className="px-[6.25%] w-full tab:h-full pt-32">
			<p className="text-xl font-bold" >
				Pilih Makanan
			</p>
			<CardFoodChosen />
			<div className={`grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1 mt-5 ${selectedFood.food_id ? '' : 'hidden'}`}>
				<CardNutritionTrack name={'Lemak'} icon={'lemak-icon.svg'} percentase={'+10%'} value={1000} target={1000} text={'Capaian menjadi'} />{' '}
				<CardNutritionTrack
					name={'Kalori'}
					icon={'kalori-icon.svg'}
					percentase={'+10%'}
					value={1000}
					target={1000}
					text={'Capaian menjadi'}
				/>
				<CardNutritionTrack
					name={'Protein'}
					icon={'protein-icon.svg'}
					percentase={'+10%'}
					value={1000}
					target={1000}
					text={'Capaian menjadi'}
				/>
				<CardNutritionTrack
					name={'Karbohidrat'}
					icon={'carbo-icon.svg'}
					percentase={'+10%'}
					value={1000}
					target={1000}
					text={'Capaian menjadi'}
				/>
			</div>
			<div className={selectedFood.food_id ? 'hidden' : ''}>
				{/* <p>Tidak ada makanan yang dipilih</p> */}
				<div className="col-span-4 flex justify-center py-8 items-center">
					<div className="text-darknavy">
						<h3 className="text-lg font-semibold">Tidak ada makanan yang dipilih</h3>
						<div className="text-center">
							<Link to={'/'}>
								<Button buttonText={'Pilih Makanan'} />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<p
				className="font-bold mt-20 text-xl 
        "
			>
				Makanan dipilih hari ini
			</p>
			<div>
				{/* <CardFoodHistory /> */}
				{foodsSelectedToday.map((x) => {
					return <CardFoodHistory
						key={x.foodId._id}
						data={x.foodId}
						portion={x.portion}
					/>
				})}
			</div>

			<Recommendation />
		</section>
	);
};

export default Tracking;
