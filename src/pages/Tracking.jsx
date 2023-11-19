import CardFoodChosen from '../components/cards/CardFoodChosen';

const Tracking = () => {
  return (
    <section className="px-[12.25%] w-full h-screen tab:h-full tab:pt-[4rem] mt-36 ">
      <p
        className="font-bold text-2xl
        ">
        Pilih Makanan
      </p>
      <CardFoodChosen />
    </section>
  );
};

export default Tracking;
