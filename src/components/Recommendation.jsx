import Button from './buttons/Button';
import CardFood from './cards/CardFood';

const Recommendation = () => {
  return (
    <div>
      <p
        className="font-bold mt-20 text-2xl
        ">
        Makanan Terpopuler
      </p>
      <div className="grid mt-10 sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-3">
        {Array.from({ length: 4 }, (_, index) => (
          <CardFood
            key={index}
            name="Nama Makanan"
            description="Description..."
            fat="93"
            calorie="100"
            protein="80"
            carbohydrate="100"
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Button buttonText={'Selengkapnya'} />
      </div>
    </div>
  );
};

export default Recommendation;
