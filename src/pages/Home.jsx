import Banner from '../components/Banner';

const Home = () => {
  return (
    <>
      <section className="px-[3.25%] w-full h-screen tab:h-full tab:pt-[4rem] mt-14 ">
        <Banner />
        <div className="w-full  mt-14 flex flex-row justify-between px-36">
          <p className="text-xl font-semibold text-black">
            Capaian Harianmu
          </p>
          <p className="text-xl font-semibold text-orange">
            Lihat semua
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
