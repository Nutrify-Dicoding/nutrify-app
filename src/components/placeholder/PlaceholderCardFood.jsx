const PlaceholderCardFood = () => {
    return (
        <div className="col-span-1 mx-auto bg-white animate-pulse rounded-lg shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] w-full">
            <div className="bg-slate-200 h-[150px] w-full rounded-t-lg"></div>
            <div className="pt-5 pb-7 px-[14px] sm:px-[10px]">
                <div className="sm:text-mobile-xl w-1/2 h-5 bg-slate-200 mb-2 rounded"></div>
                <p className="text bg-slate-200 h-5 w-full rounded"></p>
                <div className="w-full flex flex-row gap-5 justify-around mt-5 sm:gap-4 overflow-hidden">
                    <div className="flex justify-center gap-1">
                        <div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
                        </div>
                    </div>
                    <div className="flex justify-center gap-1">
                        <div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
                        </div>
                    </div>
                    <div className="flex justify-center gap-1">
                        <div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
                        </div>
                    </div>
                    <div className="flex justify-center gap-1">
                        <div className="inline h-[18px] sm:h-4 w-[36px] bg-slate-200 rounded">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceholderCardFood;