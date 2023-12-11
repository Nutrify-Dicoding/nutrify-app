/* eslint-disable react/prop-types */

function NutritionWrap({ name, icon, value }) {
    return (
        <div className="h-14 flex flex-col justify-center  items-center py-2">
            <p className="text-navy font-medium opacity-90 sm:text-sm">{name}</p>
            <div className="flex flex-row justify-center gap-2 items-center">
                <img src={`/icons/${icon}`} className="h-[18px]" alt={`icon ${name}`} />
                <p className="font-semibold text-cyan-900 sm:text-sm">
                    {value}
                    +
                </p>
            </div>
        </div>
    );
}

function CardFoodHistory({ data, portion }) {
    return (
        <div className="flex justify-between items-center tab:flex-col w-full mt-5 border border-white-400/60 rounded-[10px] p-4 sm:p-2">
            <div className="w-[25%] 2lg:w-[27%] tab:flex tab:justify-between tab:items-center tab:w-full">
                <div className="flex flex-row gap-5 items-center">
                    <img
                        src={data.image.includes('http') ? data.image : 'https://picsum.photos/265/150'}
                        alt={data ? data.name : 'food'}
                        className="w-[70px] 2lg:w-14 h-[70px] 2lg:h-14 rounded-full"
                    />
                    <div className="flex flex-col h-14 text-navy">
                        <p className="text-lg font-semibold ">{data ? data.name : ''}</p>
                        <p className="text-sm text-slate-500">Makanan Utama</p>
                    </div>
                </div>
                <div className="hidden py-2 px-5 rounded-full bg-slate-200 tab:flex flex-row items-center justify-center">
                    <p>
                        {portion}
                        {' '}
                        Porsi
                    </p>
                </div>
            </div>
            <div className="w-[55%] tab:w-full tab:mt-2 grid grid-cols-4 gap-5 sm:gap-2 sm:mr-4">
                <NutritionWrap name="Lemak" icon="icon-lemak-no-bg.svg" value={data ? (data.fat * portion).toFixed(2) : ''} />
                <NutritionWrap name="Kalori" icon="icon-calori-no-bg.svg" value={data ? (data.cal * portion).toFixed(2) : ''} />
                <NutritionWrap name="Protein" icon="icon-protein-no-bg.svg" value={data ? (data.protein * portion).toFixed(2) : ''} />
                <NutritionWrap name="Karbohidrat" icon="icon-karbo-no-bg.svg" value={data ? (data.carb * portion).toFixed(2) : ''} />
            </div>
            <div className="w-32 h-9 rounded-full bg-slate-200 flex flex-row items-center justify-center tab:hidden">
                <p>
                    {portion}
                    {' '}
                    Porsi
                </p>
            </div>
        </div>
    );
}

export default CardFoodHistory;
