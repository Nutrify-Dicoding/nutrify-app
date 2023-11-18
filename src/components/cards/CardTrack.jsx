/* eslint-disable react/prop-types */

const CardTrack = ({
  name,
  icon,
  percentase,
  needed,
  value,
  color,
}) => {
  return (
    <div className="w-64 h-52 border border-gray-200 rounded p-7 justify-between flex-col">
      <div className="w-full flex flex-row justify-between items-center h-14 border-b border-gray-200">
        <div className="flex flex-row items-center gap-3">
          <img src={`icons/${icon}`} alt="" />
          <p className="text-gray-500 font-semibold">{name}</p>
        </div>
        <p className="font-bold text-lg">{percentase}</p>
      </div>
      <div className="flex flex-row justify-between items-center h-3/4">
        <p className={`font-bold text-4xl ${color}`}>{value}</p>
        <p className="w-20 text-sm text-gray-400">
          <span className="text-green font-bold">{needed}+</span> lagi
          dari target
        </p>
      </div>
    </div>
  );
};

export default CardTrack;
