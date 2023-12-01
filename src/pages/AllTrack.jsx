import Recommendation from '../components/Recommendation';
import CardInfoBody from '../components/cards/CardInfoBody';
import CardNutritionTrack from '../components/cards/CardNutritionTrack';
import CardFoodHistory from '../components/cards/CardFoodHistory';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const dataBodyUser = [
	{
		icon: 'bmi.svg',
		title: 'Body Mass Index (BMI)',
		bodyText: 'Underweight',
		advice: 'memerlukan peningkatan berat badan untuk mencapai rentang yang sehat',
		bodyValue: 20,
	},
	{
		icon: 'berat-badan.svg',
		title: 'Berat Badan Ideal',
		bodyText: 'Underweight',
		advice: 'memerlukan peningkatan berat badan untuk mencapai rentang yang sehat',
		bodyValue: 20,
	},
];

const AllTrack = () => {
	const [historyFoods, setHistoryFoods] = useState([]);
	const token = useSelector((state) => state.auth.token)
	useEffect(() => {
		const config = {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		};
		axios.get('/tracking', config)
			.then((res) => {
				if (res.status === 200 && res.data) {
					setHistoryFoods(res.data.tracking.food);
					// console.log(res.data.tracking.food)
				}
			})
	}, [token]);
	return (
		<>
			<section className="mt-32 px-[6.25%] grid grid-cols-2 gap-5 tab:grid-cols-1">
				{dataBodyUser.map((data, index) => {
					return (
						<CardInfoBody
							key={index}
							icon={data.icon}
							title={data.title}
							bodyText={data.bodyText}
							bodyValue={data.bodyValue}
							advice={data.advice}
						/>
					);
				})}
			</section>
			<section className="px-[6.25%] mt-8">
				<div className="flex justify-between items-center mb-5">
					<h2 className="text-2xl text-navy font-semibold">Nutrisi</h2>
					<div className="flex items-center">
						<img className="w-[18px] h-[18px] mr-[10px]" src="/icons/calendar.svg" alt="Icon Calendar" />
						<p className="text-white-500 font-medium">12 Agustus 2023</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1">
					<CardNutritionTrack
						name={'Lemak'}
						icon={'lemak-icon.svg'}
						percentase={'+10%'}
						value={1000}
						target={1000}
						text={'Target Menjadi'}
					/>{' '}
					<CardNutritionTrack
						name={'Kalori'}
						icon={'kalori-icon.svg'}
						percentase={'+10%'}
						value={1000}
						target={1000}
						text={'Target Menjadi'}
					/>
					<CardNutritionTrack
						name={'Protein'}
						icon={'protein-icon.svg'}
						percentase={'+10%'}
						value={1000}
						target={1000}
						text={'Target Menjadi'}
					/>
					<CardNutritionTrack
						name={'Karbohidrat'}
						icon={'carbo-icon.svg'}
						percentase={'+10%'}
						value={1000}
						target={1000}
						text={'Target Menjadi'}
					/>
				</div>
			</section>
			<section className="px-[6.25%] mt-8">
				<div className="mb-5">
					<h2 className="text-2xl text-navy font-semibold">Riwayat Makanan</h2>
				</div>
				<div>
					{/* <CardFoodHistory /> */}
					{historyFoods.map((x) => {
						return <CardFoodHistory
							key={x.foodId._id}
							data={x.foodId}
							portion={x.portion}
						/>
					})}
				</div>
			</section>
			<section className="px-[6.25%]">
				<Recommendation />
			</section>
		</>
	);
};

export default AllTrack;
