import CardFood from '../cards/CardFood';

const ListFoodContainer = () => {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full flex flex-row flex-wrap justify-center gap-10 mt-14 items-center">
      {dummy.map((i) => {
        return (
          <CardFood
            key={i}
            name="Nama Makanan"
            description="Description..."
            fat="93"
            calorie="100"
            protein="80"
            carbohydrate="100"
          />
        );
      })}
    </div>
  );
};

export default ListFoodContainer;
