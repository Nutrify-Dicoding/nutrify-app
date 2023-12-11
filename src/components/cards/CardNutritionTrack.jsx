/* eslint-disable react/prop-types */

function CardNutritionTrack({
    name, icon, percentase, value, target, text,
}) {
    return (
        <div className="h-36 border border-slate-300 rounded-xl px-3">
            <div className="flex flex-row h-20 border-b border-slate-200 justify-between items-center">
                <div className="flex flex-row justify-center items-center gap-3">
                    <img src={`/icons/${icon}`} alt="" />
                    <p className="text-md font-medium">{name}</p>
                </div>
                <p className="font-bold text-lg">{percentase}</p>
            </div>

            <p className="text-base font-medium text-gray-400 mt-5 lg:mt-5 xl:mt-2">
                {text}
                {' '}
                <span className="text-green font-semibold">
                    {value}
                    /
                    {target}
                </span>
            </p>
        </div>
    );
}

export default CardNutritionTrack;
