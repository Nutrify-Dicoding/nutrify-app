import Banner from '../components/Banner';
import FilterContainer from '../components/containers/FilterContainer';
import ListFoodContainer from '../components/containers/ListFoodContainer';
import TrackingContainer from '../components/containers/TrackingContainer';

const Home = () => {
	return (
		<>
			<section className="px-[6.25%] mt-14 w-full tab:h-full">
				<Banner />
				<div className="w-full  mt-12 flex flex-row justify-between ">
					<p className="text-xl font-semibold text-navy">Capaian Harianmu</p>
					<p className="text-l font-semibold text-orange">Lihat semua</p>
				</div>
				<TrackingContainer />
				<FilterContainer />
				<ListFoodContainer />
			</section>
		</>
	);
};

export default Home;
