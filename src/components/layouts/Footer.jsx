const Footer = () => {
  return (
    <footer className="w-full mt-14 h-64 flex flex-col bg-navy justify-between  items-center">
      <div className="flex w-full flex-row justify-between px-10 py-12">
        <img src="icons/nutrify-logo-white.svg" alt="" />
        <div className="text-white flex flex-row gap-4 items-center justify-center">
          <a href="#">Home</a>
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <a href="#">Favorite</a>
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <a href="#">About Us</a>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <p className="text-white  ">Find us :</p>
          <a href="">
            <img src="/icons/facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="/icons/instagram.svg" alt="" />
          </a>

          <img src="/icons/x-twitter.svg" alt="" />
          <img src="/icons/envelope-regular.svg" alt="" />
        </div>
      </div>
      <div className="h-16 w-full bg-darknavy flex flex-row justify-between  px-12 items-center text-white-400">
        <p>2023@ All rights reserved. Design by Nutrify team’s </p>
        <p>Terms & Condition</p>
      </div>
    </footer>
  );
};

export default Footer;
