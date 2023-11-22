import Button from './buttons/Button';
import CardFood from './cards/CardFood';

const Recommendation = () => {
	return (
		<div className="mt-12 mb-20">
			<p
				className="font-semibold text-2xl text-navy
        "
			>
				Makanan Terpopuler
			</p>
			<div className="grid mt-8 sm:grid-cols-1 tab:grid-cols-3 grid-cols-4 gap-5 mb-12 ">
				{Array.from({ length: 4 }, (_, index) => (
					<CardFood key={index} name="Nama Makanan" description="Description..." fat="93" calorie="100" protein="80" carbohydrate="100" />
				))}
			</div>
			<div className="w-full flex justify-center">
				<Button buttonText={'Selengkapnya'} />
			</div>
		</div>
	);
};

export default Recommendation;
