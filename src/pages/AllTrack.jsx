import Recommendation from '../components/Recommendation';
import CardInfoBody from '../components/cards/CardInfoBody';
import CardNutritionTrack from '../components/cards/CardNutritionTrack';
import CardFoodHistory from '../components/cards/CardFoodHistory';
import PlaceholderCardFoodHistory from '../components/placeholder/PlaceholderCardFoodHistory';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { id } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

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
	const token = useSelector((state) => state.auth.token)
	const [historyFoods, setHistoryFoods] = useState([]);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectDate, setSelectDate] = useState(false);
	const [nutritionTotal, setNutritionTotal] = useState({});
	const userInfo = useSelector((state) => state.auth.userInfo);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		if (!selectedDate) setSelectedDate(new Date());
		if (selectedDate) {
			const config = {
				headers: {
					'Authorization': `Bearer ${token}`,
				},
			};
			const year = selectedDate.getFullYear();
			const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
			const date = String(selectedDate.getDate()).padStart(2, '0');
			const resFormat = `${year}-${month}-${date}T00:00:00.000Z`;

			setHistoryFoods([]);
			setIsFetching(true);
			axios.post('/track/history', { date: resFormat }, config)
				.then((res) => {
					// console.log(res.data.body.tracking)
					if (res.status === 200 && res.data.body.tracking.food) {
						// console.log(88887)
						setHistoryFoods(res.data.body.tracking.food);
						setNutritionTotal(res.data.body.result);
					}
				}).finally(() => {
					setIsFetching(false);
				});
		}
	}, [selectedDate, token]);

	const formatDate = (date) => {
		if (!date) return '';
		const monthNames = [
			'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
			'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
		];
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear();
		const monthName = monthNames[monthIndex];
		const formattedDate = `${day} ${monthName} ${year}`;
		return formattedDate;
	}
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
				<div className="flex justify-between overflow-hidden max-h-10 mb-5">
					<h2 className="text-2xl text-navy font-semibold">Nutrisi</h2>
					<div>
						<div className="flex items-center cursor-pointer" onClick={() => setSelectDate(!selectDate)}>
							<img className="w-[18px] h-[18px] mr-[10px]" src="/icons/calendar.svg" alt="Icon Calendar" />
							<p className="text-white-500 font-medium">{formatDate(selectedDate)}</p>
						</div>
						<div className={`bg-white absolute ms-[-150px] z-[1] mt-3 border shadow-lg ${selectDate ? 'block' : 'hidden'}`}>
							<DayPicker
								locale={id}
								mode="single" selected={selectedDate} onDayClick={(date) => setSelectedDate(date)}
								modifiersClassNames={{
									selected: 'my-selected',
									today: 'my-today'
								}}
							/>
						</div>
					</div>
				</div>
				<div className={`grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1 ${historyFoods.length ? 'block' : 'hidden'}`}>
					<CardNutritionTrack
						name={'Lemak'}
						icon={'lemak-icon.svg'}
						percentase={parseInt(nutritionTotal.totFat / userInfo.fatNeeded * 100) + '%'}
						value={nutritionTotal.totFat}
						target={parseInt(userInfo.fatNeeded)}
						text={'Capaian menjadi'}
					/>
					<CardNutritionTrack
						name={'Kalori'}
						icon={'kalori-icon.svg'}
						percentase={parseInt(nutritionTotal.totCal / userInfo.caloriNeeded * 100) + '%'}
						value={nutritionTotal.totCal}
						target={parseInt(userInfo.caloriNeeded)}
						text={'Capaian menjadi'}
					/>
					<CardNutritionTrack
						name={'Protein'}
						icon={'protein-icon.svg'}
						percentase={parseInt(nutritionTotal.totProtein / userInfo.proteinNeeded * 100) + '%'}
						value={nutritionTotal.totProtein}
						target={parseInt(userInfo.proteinNeeded)}
						text={'Capaian menjadi'}
					/>
					<CardNutritionTrack
						name={'Karbohidrat'}
						icon={'carbo-icon.svg'}
						percentase={parseInt(nutritionTotal.totCarb / userInfo.carboNeeded * 100) + '%'}
						value={nutritionTotal.totCarb}
						target={parseInt(userInfo.carboNeeded)}
						text={'Capaian menjadi'}
					/>
				</div>
			</section>
			<section className="px-[6.25%] mt-8">
				<div className="mb-5">
					<h2 className="text-2xl text-navy font-semibold">Riwayat Makanan</h2>
				</div>
				<div className={`text-center text-darknavy mb-10 ${historyFoods.length ? 'hidden' : 'block'}`}>
					<p className="text-md font-semibold">
						No Tracking Found!
					</p>
				</div>
				<div>
					{isFetching &&
						[...Array(3)].map((_, i) => {
							return (
								<PlaceholderCardFoodHistory key={i} />
							);
						})}
					{historyFoods.map((x, index) => {
						return <CardFoodHistory
							key={index}
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
