import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import FilterContainer from '../components/containers/FilterContainer';
import ListFoodContainer from '../components/containers/ListFoodContainer';
import TrackingContainer from '../components/containers/TrackingContainer';

function Home() {
	return (
		<section className="px-[6.25%] mt-14 w-full mb-20 sm:mb-12 tab:h-full">
			<Banner />
			<div className="w-full  mt-12 flex flex-row justify-between ">
				<p className="text-xl sm:text-mobile-xl font-semibold text-navy">Capaian Harianmu</p>
				<p className="sm:text-sm mt-1 font-semibold text-orange">
					<Link to="/alltrack">Lihat semua</Link>
				</p>
			</div>
			<TrackingContainer />
			<FilterContainer />
			<ListFoodContainer />
		</section>
	);
}

export default Home;
