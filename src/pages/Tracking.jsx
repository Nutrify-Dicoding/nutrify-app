import Recommendation from '../components/Recommendation';
import CardFoodChosen from '../components/cards/CardFoodChosen';
import CardFoodHistory from '../components/cards/CardFoodHistory';
import CardNutritionTrack from '../components/cards/CardNutritionTrack';

const Tracking = () => {
  return (
    <section className="px-[12.25%] w-full h-screen tab:h-full tab:pt-[4rem] mt-36 ">
      <p
        className="font-bold text-2xl
        ">
        Pilih Makanan
      </p>
      <CardFoodChosen />
      <div className="w-full mt-10 flex flex-row flex-wrap items-center justify-between">
        <CardNutritionTrack
          name={'Lemak'}
          icon={'lemak-icon.svg'}
          percentase={'10%'}
          value={1000}
          target={1000}
          text={'Capaian menjadi'}
        />{' '}
        <CardNutritionTrack
          name={'Kalori'}
          icon={'kalori-icon.svg'}
          percentase={'10%'}
          value={1000}
          target={1000}
          text={'Capaian menjadi'}
        />
        <CardNutritionTrack
          name={'Protein'}
          icon={'protein-icon.svg'}
          percentase={'10%'}
          value={1000}
          target={1000}
          text={'Capaian menjadi'}
        />
        <CardNutritionTrack
          name={'Karbohidrat'}
          icon={'carbo-icon.svg'}
          percentase={'10%'}
          value={1000}
          target={1000}
          text={'Capaian menjadi'}
        />
      </div>
      <p
        className="font-bold mt-20 text-2xl
        ">
        Makanan dipilih hari ini
      </p>
      <div>
        <CardFoodHistory />
        <CardFoodHistory />
        <CardFoodHistory />
      </div>

      <Recommendation />
    </section>
  );
};

export default Tracking;
