/* eslint-disable react/prop-types */
const CardFood = ({
  name,
  description,
  fat,
  calorie,
  protein,
  carbohydrate,
}) => {
  return (
    <div className="col-span-1 mx-auto bg-white rounded-lg w-64 mb-6 shadow-md">
      <img
        className="rounded-t-lg w-full"
        src="https://i.ibb.co/YbZR8mc/Group-40.png"
        alt=""
      />
      <div className="p-1">
        <h3 className="font-semibold text-navy">{name}</h3>
        <p className="text-xs text-navy">{description}</p>
        <div className="w-full flex p-5 flex-row gap-5 justify-around">
          <div className="text-xs flex justify-center gap-2 items-center   text-navy">
            <img
              src="/icons/cloud-meatball-solid.svg"
              className="inline"
            />{' '}
            {fat}
          </div>
          <div className="text-xs  flex justify-center gap-2 items-center text-navy">
            <img src="/icons/fire-solid.svg" className="inline" />{' '}
            {calorie}
          </div>
          <div className="text-xs flex justify-center gap-2 items-center  text-navy">
            <img src="/icons/dna-solid.svg" className="inline" />{' '}
            {protein}
          </div>
          <div className="text-xs flex justify-center gap-2 items-center  text-navy">
            <img
              src="/icons/wheat-awn-solid.svg"
              className="inline"
            />{' '}
            {carbohydrate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFood;
