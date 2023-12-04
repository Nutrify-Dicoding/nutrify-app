import { useEffect, useState } from 'react';
import CardTrackStats from '../cards/CardTrackStats';
import axios from 'axios';
import { useSelector } from 'react-redux';

const TrackingContainer = () => {
	const [nutritionTotal, setNutritionTotal] = useState({});
	// const [isFetching, setIsFetching] = useState(true);
	const userInfo = useSelector((state) => state.auth.userInfo);
	const token = useSelector((state) => state.auth.token);
	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios.get('/track/today', config).then((res) => {
			if (res.status === 200 && res.data) {
				setNutritionTotal(res.data.body.result);
			}
		})
	}, [token]);
	return (
		<div className="mt-6 grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1">
			<CardTrackStats
				color={'text-yellow'}
				icon={'lemak-icon.svg'}
				percentase={parseInt( nutritionTotal.totFat/userInfo.fatNeeded * 100) + '%'}
				needed={parseInt(userInfo.fatNeeded - nutritionTotal.totFat)}
				value={nutritionTotal.totFat}
				name={'Lemak'}
			/>
			<CardTrackStats
				color={'text-rose-400'}
				icon={'kalori-icon.svg'}
				percentase={parseInt( nutritionTotal.totCal/userInfo.caloriNeeded * 100) + '%'}
				needed={parseInt(userInfo.caloriNeeded - nutritionTotal.totCal)}
				value={nutritionTotal.totCal}
				name={'Kalori'}
			/>
			<CardTrackStats
				color={'text-cyan-900'}
				icon={'protein-icon.svg'}
				percentase={parseInt( nutritionTotal.totProtein/userInfo.proteinNeeded * 100) + '%'}
				needed={parseInt(userInfo.proteinNeeded - nutritionTotal.totProtein)}
				value={nutritionTotal.totProtein}
				name={'Protein'}
			/>
			<CardTrackStats
				color={'text-orange'}
				icon={'carbo-icon.svg'}
				percentase={parseInt( nutritionTotal.totCarb/userInfo.carboNeeded * 100) + '%'}
				needed={parseInt(userInfo.carboNeeded - nutritionTotal.totCarb)}
				value={nutritionTotal.totCarb}
				name={'Karbohidrat'}
			/>
		</div>
	);
};

export default TrackingContainer;
