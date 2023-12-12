/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DayPicker } from 'react-day-picker';
import Recommendation from '../components/Recommendation';
import CardInfoBody from '../components/cards/CardInfoBody';
import CardNutritionTrack from '../components/cards/CardNutritionTrack';
import CardFoodHistory from '../components/cards/CardFoodHistory';
import PlaceholderCardFoodHistory from '../components/placeholder/PlaceholderCardFoodHistory';
import 'react-day-picker/dist/style.css';

function AllTrack() {
	const token = useSelector((state) => state.auth.token);
	const [historyFoods, setHistoryFoods] = useState([]);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectDate, setSelectDate] = useState(false);
	const [nutritionTotal, setNutritionTotal] = useState({});
	const userInfo = useSelector((state) => state.auth.userInfo);
	const [isFetching, setIsFetching] = useState(false);
	const [dataBodyUser, setDataBodyUser] = useState([]);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		axios.get('/profile', config).then((res) => {
			if (res.status === 200) {
				// set Body Mass Index (BMI)
				const bmi = res.data.profile.berat / ((res.data.profile.tinggi / 100) * (res.data.profile.tinggi / 100));

				const dataBmi = {};
				dataBmi.icon = 'bmi.svg';
				dataBmi.title = 'Body Mass Index (BMI)';
				dataBmi.bodyText = res.data.profile.status;
				dataBmi.bodyValue = parseInt(bmi);
				if (bmi < 18.5) {
					dataBmi.advice = `Status BMI anda ${dataBmi.bodyText}, capai BMI 18.5 - 24.9 dengan peningkatan asupan nutrisi harian kamu!`;
				} else if (bmi >= 18.5 && bmi <= 24.9) {
					dataBmi.advice = `Status BMI anda ${dataBmi.bodyText}, terus pertahankan asupan nutrisi anda untuk tetap berada pada rentang yang sehat.`;
				} else {
					dataBmi.advice = `Status BMI anda ${dataBmi.bodyText}, capai BMI 18.5 - 24.9 dengan melakukan penyesuaian asupan nutrisi harianmu!`;
				}

				// set Berat Badan Ideal
				console.log(res.data.profile.bbi);
				const bbi = res.data.profile.bbi.value;
				const beratBadan = res.data.profile.berat;

				const dataBbi = {};
				dataBbi.icon = 'berat-badan.svg';
				dataBbi.title = 'Berat Badan Ideal';
				dataBbi.bodyText = res.data.profile.bbi.status;
				dataBbi.bodyValue = parseInt(bbi);
				if (beratBadan >= bbi - 1 && beratBadan <= bbi + 1) {
					dataBbi.advice = `Selamat! Berat badan Anda ${dataBbi.bodyText}. Tetap jaga pola makan sehat untuk kesehatan yang optimal.`;
				} else {
					dataBbi.advice = `Berat badan anda ${dataBbi.bodyText} (${beratBadan}). Capai berat badan ${bbi - 1} - ${
						bbi + 1
					} supaya berat badan anda ideal.`;
				}
				setDataBodyUser([dataBmi, dataBbi]);
			}
		});

		if (!selectedDate) setSelectedDate(new Date());
		if (selectedDate) {
			setHistoryFoods([]);
			setIsFetching(true);
			axios
				.post('/track/history', { date: selectedDate.toLocaleDateString('fr-CA') }, config)
				.then((res) => {
					// console.log(res.data.body.tracking)
					if (res.status === 200 && res.data.body.tracking.food) {
						setHistoryFoods(res.data.body.tracking.food);
						setNutritionTotal(res.data.body.result);
					}
				})
				.finally(() => {
					setIsFetching(false);
				});
		}
	}, [selectedDate, token]);

	const formatDate = (date) => {
		if (!date) return '';
		const monthNames = [
			'Januari',
			'Februari',
			'Maret',
			'April',
			'Mei',
			'Juni',
			'Juli',
			'Agustus',
			'September',
			'Oktober',
			'November',
			'Desember',
		];
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear();
		const monthName = monthNames[monthIndex];
		const formattedDate = `${day} ${monthName} ${year}`;
		return formattedDate;
	};
	return (
		<>
			<section className="mt-32 px-[6.25%] grid grid-cols-2 gap-5 tab:grid-cols-1">
				{dataBodyUser.map((data, index) => (
					<CardInfoBody
						key={index}
						icon={data.icon}
						title={data.title}
						bodyText={data.bodyText}
						bodyValue={data.bodyValue}
						advice={data.advice}
					/>
				))}
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
								mode="single"
								selected={selectedDate}
								onDayClick={(date) => setSelectedDate(date)}
								modifiersClassNames={{
									selected: 'my-selected',
									today: 'my-today',
								}}
							/>
						</div>
					</div>
				</div>
				<div className={`grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1 ${historyFoods.length ? 'block' : 'hidden'}`}>
					<CardNutritionTrack
						name="Lemak"
						icon="lemak-icon.svg"
						percentase={`${parseInt((nutritionTotal.totFat / userInfo.fatNeeded) * 100)}%`}
						value={nutritionTotal.totFat}
						target={parseInt(userInfo.fatNeeded)}
						text="Capaian"
					/>
					<CardNutritionTrack
						name="Kalori"
						icon="kalori-icon.svg"
						percentase={`${parseInt((nutritionTotal.totCal / userInfo.caloriNeeded) * 100)}%`}
						value={nutritionTotal.totCal}
						target={parseInt(userInfo.caloriNeeded)}
						text="Capaian"
					/>
					<CardNutritionTrack
						name="Protein"
						icon="protein-icon.svg"
						percentase={`${parseInt((nutritionTotal.totProtein / userInfo.proteinNeeded) * 100)}%`}
						value={nutritionTotal.totProtein}
						target={parseInt(userInfo.proteinNeeded)}
						text="Capaian"
					/>
					<CardNutritionTrack
						name="Karbohidrat"
						icon="carbo-icon.svg"
						percentase={`${parseInt((nutritionTotal.totCarb / userInfo.carboNeeded) * 100)}%`}
						value={nutritionTotal.totCarb}
						target={parseInt(userInfo.carboNeeded)}
						text="Capaian"
					/>
				</div>
			</section>
			<section className="px-[6.25%] mt-8">
				<div className="mb-5">
					<h2 className="text-2xl text-navy font-semibold">Riwayat Makanan</h2>
				</div>
				<div className={`text-center text-darknavy mb-10 ${historyFoods.length ? 'hidden' : 'block'}`}>
					<p className="text-md font-semibold">No Tracking Found!</p>
				</div>
				<div>
					{isFetching && [...Array(3)].map((_, i) => <PlaceholderCardFoodHistory key={i} />)}
					{historyFoods.map((x, index) => (
						<CardFoodHistory key={index} data={x.foodId} portion={x.portion} />
					))}
				</div>
			</section>
			<section className="px-[6.25%]">
				<Recommendation />
			</section>
		</>
	);
}

export default AllTrack;
