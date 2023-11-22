import background from "../assets/background.png";

const SignUp = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-screen w-screen fixed top-0 left-0 z-[-2]"></div>
      <div className="flex items-center justify-center mt-[10rem] z-[2]">
        <div className="flex">
          <div className="container mb-5 max-w-xl ml-9 bg-white bg-opacity-5 backdrop-blur-lg p-10 rounded-md shadow-lg">
            <h1 className="-mt-2 text-lg">
              <span className="text-white mr-[4px] font-bold">Register</span>
              <span className="text-[#FB8500] font-bold">Now!</span>
            </h1>
            <form action="" className="-mt-1 flex flex-wrap">
              <div className="flex items-center gap-[10px] mt-3 ">
                <div>
              <label htmlFor="nama" className="text-white text-xs">Nama Panjang</label>
                <input type="text" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Nama Panjang" />
                </div>
                <div>
                <label htmlFor="nama" className="text-white text-xs">Email</label>
                <input type="text" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Email" />
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-3">
              <div>
                <label htmlFor="nama" className="text-white text-xs">Password</label>
                <input type="password" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Password" />
                </div>
                <div>
                <label htmlFor="nama" className="text-white text-xs">Konfirmasi Password</label>
                <input type="password" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Konfirmasi Password" />
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-3">
              <div>
                <label htmlFor="nama" className="text-white text-xs">Jenis Kelamin</label>
                <input type="text" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Jenis Kelamin" />
                </div>
                <div>
                <label htmlFor="nama" className="text-white text-xs">Umur</label>
                <input type="text" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Umur" />
                </div>
              </div>
              <div className="flex gap-[10px] mt-3">
              <div>
                <label htmlFor="nama" className="text-white text-xs">Masukan Berat Badan</label>
              <input type="text" className="block rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2 w-[9.6rem]" placeholder="Berat Badan" /> </div>
              <div>
                <label htmlFor="nama" className="text-white text-xs">Masukan Tinggi Badan</label>
              <input type="text" className="block rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2 w-[9.5rem]" placeholder="Tinggi Badan" /></div>
              <div>
                <label htmlFor="nama" className="text-white text-xs">Masukan Kegiatan</label>
              <input type="text" className="block rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2 w-[9.6rem]" placeholder="Jenis Kegiatan" /></div>
              </div>
              <button className="mt-5 ml-[7.6rem] text-[0.90rem] w-[16rem] bg-[#FB8500] px-2 py-1 h-8 rounded-md text-white">
                Register
              </button>
            </form>
            <p className="mt-4 text-xs text-white text-center">
              Sudah punya akun?{' '}
              <a href="#" className="text-[#FB8500] font-bold">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
