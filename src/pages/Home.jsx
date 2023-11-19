import Banner from '../components/Banner';
import FilterContainer from '../components/containers/FilterContainer';
import ListFoodContainer from '../components/containers/ListFoodContainer';
import TrackingContainer from '../components/containers/TrackingContainer';

const Home = () => {
  return (
    <>
      <section className="px-[12.25%] md:px-3 w-full  tab:h-full tab:pt-[4rem] mt-14 ">
        <Banner />
        <div className="w-full  mt-14 flex flex-row justify-between ">
          <p className="text-l font-semibold text-black">
            Capaian Harianmu
          </p>
          <p className="text-l font-semibold text-orange">
            Lihat semua
          </p>
        </div>
        <TrackingContainer />
        <FilterContainer />
        <ListFoodContainer />
      </section>
    </>
  );
};

export default Home;
