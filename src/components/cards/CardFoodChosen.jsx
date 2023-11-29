import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NutritionWrap = ({ name, icon, value }) => {
  return (
    <div className="w-40 md:w-auto flex flex-col xl:justify-center xl:items-center md:justify-start md:items-start">
      <p className="text-sm block md:hidden w-full text-center lg:mt-3"><span className="inline lg:hidden">Jumlah</span> {name}</p>
      <div className="flex flex-row justify-center gap-2 sm:gap-1 items-center mt-0 sm:mt-1">
        <img src={`/icons/${icon}`} className="w-auto sm:w-6" alt={`icon ${name}`} />
        <p className="font-semibold text-cyan-900 text-base sm:text-xs md:text-sm">{value}+ <span className="hidden md:inline">{name}</span></p>
      </div>
    </div>
  );
};
const CardFoodChosen = () => {
  const [porsi, setPorsi] = useState(0);

  const hanldeMinPorsi = () => {
    if (porsi > 0) {
      setPorsi((prev) => prev - 1);
    }
  };

  const hanldePlusPorsi = () => {
    setPorsi((prev) => prev + 1);
  };

  return (
    <div className="w-full mt-5 border border-white-300 p-4 sm:p-2 flex rounded-lg">
      <div className="flex items-center">
        <img
          src={'/images/traditional-nasi-lemak.png'}
          alt={''}
          className="w-[70px] h-[70px] max-w-[70px] rounded-full"
        />
      </div>
      <div className="w-full flex md:block justify-between md:justify-start ps-4 sm:ps-3 items-center">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold whitespace-nowrap">{'Nasi Padang'}</p>
            <p className="text-sm text-slate-500 whitespace-nowrap">Makanan Utama</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-4">
          <NutritionWrap
            name={'Lemak'}
            icon={'lemak-icon.svg'}
            value={1000}
          />
          <NutritionWrap
            name={'Kalori'}
            icon={'kalori-icon.svg'}
            value={1000}
          />
          <NutritionWrap
            name={'Protein'}
            icon={'protein-icon.svg'}
            value={1000}
          />
          <NutritionWrap
            name={'Karbohidrat'}
            icon={'carbo-icon.svg'}
            value={1000}
          />
        </div>
        <div className="w-auto md:w-full">
          <div className="w-32 h-8 mt-4 rounded-full bg-slate-200 flex flex-row items-center justify-between ml-auto">
            <button
              className="w-11 font-bold text-orange-100"
              onClick={() => hanldeMinPorsi()}>
              -
            </button>
            <p>{porsi}</p>
            <button
              className="w-11 font-bold text-orange-100"
              onClick={() => hanldePlusPorsi()}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CardFoodChosen;
