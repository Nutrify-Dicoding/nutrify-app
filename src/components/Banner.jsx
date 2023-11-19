const Banner = () => {
  return (
    <div className="w-full md:mt-5 mt-36 relative flex flex-col items-center">
      <img src="/images/banner-nutrify.png" alt="" />
      <div className="block lg:hidden absolute top-24 left-52">
        <p className="text-4xl font-bold text-white">
          Hello <span className="text-orange">Sabrina</span>{' '}
        </p>
        <p className="text-lg text-white-200">
          Jangan lupa penuhi nutrisi harianmu ya!
        </p>
      </div>
    </div>
  );
};

export default Banner;
