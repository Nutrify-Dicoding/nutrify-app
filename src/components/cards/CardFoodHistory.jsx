// eslint-disable-next-line react/prop-types
const NutritionWrap = ({ name, icon, value }) => {
  return (
    <div className="w-40 h-14 flex flex-col justify-center  items-center py-2 ">
      <p className="text-sm ">{name}</p>
      <div className="flex flex-row justify-center gap-2 items-center">
        <img src={`/icons/${icon}`} alt="" />
        <p className="font-semibold text-cyan-900">{value}+</p>
      </div>
    </div>
  );
};
const CardFoodHistory = () => {
  return (
    <div className="w-full mt-5 border border-white-300 p-4 justify-between items-center flex flex-row flex-wrap">
      {/* info makanan */}
      <div className="flex flex-row gap-5 items-center">
        <img
          src="/images/traditional-nasi-lemak.png"
          alt=""
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col h-14">
          <p className="text-lg font-semibold">Nasi Padang</p>
          <p className="text-sm text-slate-500">Makanan Utama</p>
        </div>
      </div>
      {/* info nutrisi */}
      <div className="flex justify-center gap-5 items-center flex-row">
        <NutritionWrap
          name={'Jumlah Lemak'}
          icon={'lemak-icon.svg'}
          value={1000}
        />
        <NutritionWrap
          name={'Jumlah Kalori'}
          icon={'kalori-icon.svg'}
          value={1000}
        />
        <NutritionWrap
          name={'Protein Lemak'}
          icon={'protein-icon.svg'}
          value={1000}
        />
        <NutritionWrap
          name={'Karbohidrat Lemak'}
          icon={'carbo-icon.svg'}
          value={1000}
        />
      </div>
      {/* pilih porsi */}
      <div className="w-32 h-9 rounded-full bg-slate-200 flex flex-row items-center justify-center">
        <p>1 Porsi</p>
      </div>
    </div>
  );
};

export default CardFoodHistory;
