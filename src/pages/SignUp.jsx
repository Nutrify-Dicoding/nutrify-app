import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import background from "../assets/Background.png";
import { useState } from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    gender: 'pria',
    tinggi: '',
    berat: '',
    umur: '',
    password: '',
    confirm_password: '',
    levAktivitas: 1,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const setGenderChoice = (choice) => {
    setFormData({
      ...formData,
      gender: choice.target.value,
    });
  }
  const setlevAktivitas = (choice) => {
    setFormData({
      ...formData,
      levAktivitas: choice.target.value,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check all field is filled
    const keys = Object.keys(formData);
    const values = Object.values(formData);
    for (let i = 0; i < keys.length; i++) {
      if (values[i] === '') {
        toast.error('Please complete all fields!', { 'position': 'bottom-right' })
        return;
      }
    }

    // check password and confirm password is same
    if (formData.password !== formData.confirm_password) {
      toast.error('Password and confirm password do not match!', { 'position': 'bottom-right' })
      return;
    }

    axios.post(`/signup`, formData)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message, { 'position': 'bottom-right' })
          navigate('/auth/signin');
        } else {
          toast.error(res.data.message ?? 'Something went wrong', { 'position': 'bottom-right' })
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message ?? 'Something went wrong', { 'position': 'bottom-right' })
      })
    console.log(formData)
  }
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className="flex items-center justify-center pt-[10rem] z-[2] bg-no-repeat bg-center bg-cover">
        <div className="flex">
          <div className="container mb-5 max-w-xl ml-9 bg-white bg-opacity-5 backdrop-blur-lg p-10 rounded-md shadow-lg">
            <h1 className="-mt-2 text-lg">
              <span className="text-white mr-[4px] font-bold">Register</span>
              <span className="text-[#FB8500] font-bold">Now!</span>
            </h1>
            <form onSubmit={handleSubmit} className="-mt-1 flex flex-wrap">
              <div className="flex items-center gap-[10px] mt-3 ">
                <div>
                  <label htmlFor="nama" className="text-white text-xs">Nama Lengkap</label>
                  <input type="text" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Nama Lengkap" value={formData.username} name="username" autoFocus onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="text-white text-xs">Email</label>
                  <input type="email" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Email" value={formData.email} name="email" onChange={handleChange} />
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-3">
                <div>
                  <label htmlFor="password" className="text-white text-xs">Password</label>
                  <input type="password" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Password" value={formData.password} name="password" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="password" className="text-white text-xs">Konfirmasi Password</label>
                  <input type="password" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Konfirmasi Password" value={formData.confirm_password} name="confirm_password" onChange={handleChange} />
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-3">
                <div>
                  <label htmlFor="gender" className="text-white text-xs">Jenis Kelamin</label>
                  <select onChange={(choice) => setGenderChoice(choice)} name="gender" className='block w-[15rem] rounded-md h-9 ps-3 placeholder-[#002140] text-xs mr-2'>
                    <option value="pria">Pria</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="umur" className="text-white text-xs">Umur</label>
                  <input type="number" className="block w-[15rem] rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2" placeholder="Umur" value={formData.umur} name="umur" onChange={handleChange} />
                </div>
              </div>
              <div className="flex gap-[10px] mt-3">
                <div>
                  <label htmlFor="bb" className="text-white text-xs">Masukan Berat Badan</label>
                  <input type="number" className="block rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2 w-[9.6rem]" placeholder="Berat Badan" value={formData.berat} name="berat" onChange={handleChange} /> </div>
                <div>
                  <label htmlFor="tb" className="text-white text-xs">Masukan Tinggi Badan</label>
                  <input type="number" className="block rounded-md h-9 p-3 placeholder-[#002140] text-xs mr-2 w-[9.5rem]" placeholder="Tinggi Badan" value={formData.tinggi} name="tinggi" onChange={handleChange} /></div>
                <div>
                  <label htmlFor="kegiatan" className="text-white text-xs">Masukan Kegiatan</label>
                  <select onChange={(choice) => setlevAktivitas(choice)} name="gender" className='block rounded-md h-9 ps-3 placeholder-[#002140] text-xs mr-2 w-[9.6rem]'>
                    <option value="1">sangat ringan (0 x olahraga / minggu)</option>
                    <option value="2">ringan (1-3 x olahraga / minggu)</option>
                    <option value="3">sedang (3-5 x olahraga / minggu)</option>
                    <option value="4">berat (5-6 x olahraga / minggu)</option>
                    <option value="5">sangat berat (2 x olahraga / sehari)</option>
                  </select>
                </div>
              </div>
              <button className="mt-5 ml-[7.6rem] text-[0.90rem] w-[16rem] bg-[#FB8500] px-2 py-1 h-8 rounded-md text-white">
                Register
              </button>
            </form>
            <p className="mt-4 text-xs text-white text-center">
              Sudah punya akun?{' '}
              <Link to="/auth/signin" className="text-[#FB8500] font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
