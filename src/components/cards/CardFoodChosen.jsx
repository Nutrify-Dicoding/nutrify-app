import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearSelectedFood, setSelectedFoodPortion } from '../../redux/slices/selectedFoodSlice';

// eslint-disable-next-line react/prop-types
function NutritionWrap({ name, icon, value }) {
	return (
		<div className="h-14 flex flex-col justify-center  items-center py-2">
			<p className="text-navy font-medium opacity-90 sm:text-sm">{name}</p>
			<div className="flex flex-row justify-center gap-2 items-center">
				<img className="h-[18px]" src={`/icons/${icon}`} alt={`Icon ${name}`} />
				<p className="font-semibold text-cyan-900 sm:text-sm">{value}+</p>
			</div>
		</div>
	);
}
function CardFoodChosen() {
	const selectedFood = useSelector((state) => state.selectedFood);
	const [porsi, setPorsi] = useState(selectedFood.portion);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state) => state.auth.token);

	const hanldeMinPorsi = () => {
		if (porsi > 1) {
			setPorsi((prev) => prev - 1);
			dispatch(
				setSelectedFoodPortion({
					portion: porsi - 1,
				}),
			);
		}
	};

	const hanldePlusPorsi = () => {
		setPorsi((prev) => prev + 1);
		dispatch(
			setSelectedFoodPortion({
				portion: porsi + 1,
			}),
		);
	};

	const Track = () => {
		const food = {
			foodId: selectedFood.food_id,
			portion: porsi,
			time: Date.now(),
		};
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		axios.post('/track', { food }, config).then((res) => {
			// console.log(res);
			if (res.status === 200) {
				toast.success(res.data.message, { position: 'bottom-right' });
				dispatch(clearSelectedFood());
				navigate('/alltrack');
			}
		});
	};

	return (
		<div
			className={`flex justify-between items-center tab:flex-col w-full mt-5 border border-white-400/60 rounded-[10px] p-4 sm:p-2 ${
				selectedFood.food_id ? '' : 'hidden'
			}`}
		>
			<div className="w-[25%] 2lg:w-[27%] tab:flex tab:justify-between tab:items-center tab:w-full">
				<div className="flex flex-row gap-5 items-center">
					<img
						src={selectedFood.image && selectedFood.image.includes('http') ? selectedFood.image : 'https://picsum.photos/150/150'}
						alt="Gambar Makanan"
						className="w-[70px] 2lg:w-14 h-[70px] 2lg:h-14 rounded-full"
					/>
					<div className="flex flex-col h-14 text-navy">
						<p className="text-lg font-semibold ">{selectedFood.name}</p>
						<p className="text-sm text-slate-500">Makanan Utama</p>
					</div>
				</div>
				{/* <div className="hidden py-2 px-2 rounded-full bg-slate-200 tab:flex flex-row items-center justify-between">
					<button type="button" className="w-11 sm:w-8 font-bold text-orange-100" onClick={() => hanldeMinPorsi()}>
						-
					</button>
					<p>{porsi}</p>
					<button type="button" className="w-11 sm:w-8 font-bold text-orange-100" onClick={() => hanldePlusPorsi()}>
						+
					</button>
				</div> */}
			</div>
			<div className="w-[55%] tab:w-full tab:mt-2 grid grid-cols-4 gap-5 sm:gap-2 sm:mr-4">
				<NutritionWrap name="Lemak" icon="icon-lemak-no-bg.svg" value={selectedFood.fat * porsi} />
				<NutritionWrap name="Kalori" icon="icon-calori-no-bg.svg" value={selectedFood.cal * porsi} />
				<NutritionWrap name="Protein" icon="icon-protein-no-bg.svg" value={selectedFood.protein * porsi} />
				<NutritionWrap name="Karbohidrat" icon="icon-karbo-no-bg.svg" value={selectedFood.carb * porsi} />
			</div>
			<div className="flex flex-col tab:flex-row gap-2 tab:gap-5 items-center tab:mt-4">
				<div className="py-2 px-2 w-[100px] rounded-full bg-slate-200 flex flex-row items-center justify-between">
					<button type="button" className="w-11 font-bold text-orange-100" onClick={() => hanldeMinPorsi()}>
						-
					</button>
					<p>{porsi}</p>
					<button type="button" className="w-11 font-bold text-orange-100" onClick={() => hanldePlusPorsi()}>
						+
					</button>
				</div>
				<div className="w-full">
					<button type="button" onClick={() => Track()} className="p-3 py-2 text-white w-full bg-orange rounded-full">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default CardFoodChosen;
