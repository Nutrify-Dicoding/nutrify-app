/* eslint-disable react/prop-types */

function NutritionWrap() {
    return (
        <div className="h-14 flex flex-col justify-center  items-center py-2">
            <p className="opacity-90 sm:text-sm bg-slate-200 w-1/2 h-[1rem]" />
            <div className="flex flex-row justify-center gap-2 items-center bg-slate-200 mt-1 w-1/3">
                <p className="h-[1rem]" />
            </div>
        </div>
    );
}

// eslint-disable-next-line no-unused-vars
function PlaceholderCardFoodHistory({ data, portion }) {
    return (
        <div className="flex justify-between items-center tab:flex-col w-full mt-5 border border-white-400/60 rounded-[10px] p-4 sm:p-2 animate-pulse">
            <div className="w-[25%] 2lg:w-[27%] tab:flex tab:justify-between tab:items-center tab:w-full">
                <div className="flex flex-row gap-5 items-center">
                    <div className="min-w-[70px] 2lg:w-14 h-[70px] 2lg:h-14 rounded-full bg-slate-200" />
                    <div className="flex flex-col h-14 text-navy w-full">
                        <p className="text-lg w-full h-[1rem] bg-slate-200" />
                        <p className="text-sm text-slate-500 w-1/2 h-[1rem] mt-1 bg-slate-200" />
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
                <NutritionWrap />
                <NutritionWrap />
                <NutritionWrap />
                <NutritionWrap />
            </div>
            <div className="w-32 h-9 rounded-full bg-slate-200 flex flex-row items-center justify-center tab:hidden">
                <p />
            </div>
        </div>
    );
}

export default PlaceholderCardFoodHistory;
