// eslint-disable-next-line react/prop-types
const ItemFilter = ({ category }) => {
  return (
    <div className=" w-28 h-11 rounded-full bg-slate-200 flex justify-center items-center">
      <p className="text-sm ">{category}</p>
    </div>
  );
};

export default ItemFilter;
