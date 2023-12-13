/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/buttons/Button';
import Breadcrumb from '../components/Breadcrumb';

function EditProfile() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const breadcrumbItems = [
        { label: 'Profile', url: '/profile' },
        { label: 'Edit Profile', url: '#' },
    ];
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios.get('/profile', config)
            .then((res) => {
                if (res.status === 200) setUser(res.data.profile);
            });
    }, [token, navigate, dispatch]);
    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const saveProfile = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const formData = {
            username: user.username,
            gender: user.gender,
            tinggi: user.tinggi,
            berat: user.berat,
            levelAktivitas: user.levelActivity,
            umur: user.umur,
        };
        axios.put('/profile', formData, config)
            .then((res) => {
                if (res.status === 200 && res.data) {
                    toast.success(res.data.message, { position: 'bottom-right' });
                } else {
                    toast.error(res.data.message ?? 'Something went wrong', { position: 'bottom-right' });
                }
            });
    };
    const setlevelActivity = (choice) => {
        setUser({
            ...user,
            levelActivity: choice.target.value,
        });
    };

    return (
        <section className="pt-24 px-[6.25%] text-navy mb-20 sm:mb-12">
            <Breadcrumb items={breadcrumbItems} />
            <div className="border p-4 rounded-lg mt-2">
                <div className="font-semibold border-b pb-2 text-xl">Edit Informasi Pribadi</div>
                <div className="grid grid-cols-2 sm:grid-cols-1">
                    <div className="pe-12 sm:pe-0">
                        <div className="font-medium mt-5">Nama Lengkap</div>
                        <input
                            name="username"
                            className="p-3 w-full bg-white-100 rounded focus:outline-white-400"
                            type="text"
                            value={user.username || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="pe-12 sm:pe-0">
                        <div className="font-medium mt-5">Jenis Kelamin</div>
                        <select name="gender" onChange={handleInputChange} value={user.gender || ''} className="p-3 w-full bg-white-100 outline-gray-500 focus:outline-white-400">
                            <option value="wanita">Wanita</option>
                            <option value="pria">Pria</option>
                        </select>

                    </div>
                    <div className="pe-12 sm:pe-0">
                        <div className="font-medium mt-5">Umur</div>
                        <input name="umur" onChange={handleInputChange} className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.umur || ''} />
                    </div>
                    <div className="pe-12 sm:pe-0">
                        <div className="font-medium mt-5">Berat Badan</div>
                        <input name="berat" onChange={handleInputChange} className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.berat || ''} />
                    </div>
                    <div className="pe-12 sm:pe-0">
                        <div className="font-medium mt-5">Tinggi Badan</div>
                        <input name="tinggi" onChange={handleInputChange} className="p-3 w-full bg-white-100 rounded focus:outline-white-400" type="text" value={user.tinggi || ''} />
                    </div>
                    <div className="pe-12 sm:pe-0">
                        <div className="font-medium mt-5">Tingkat Kegiatan</div>
                        <select value={user.levelActivity || 1} onChange={(choice) => setlevelActivity(choice)} name="gender" className="p-3 w-full bg-white-100 rounded focus:outline-white-400">
                            <option value="1">sangat ringan (0 x olahraga / minggu)</option>
                            <option value="2">ringan (1-3 x olahraga / minggu)</option>
                            <option value="3">sedang (3-5 x olahraga / minggu)</option>
                            <option value="4">berat (5-6 x olahraga / minggu)</option>
                            <option value="5">sangat berat (2 x olahraga / sehari)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="text-center mt-12 mb-16">
                <div onClick={() => saveProfile()}>
                    <Button buttonText="Simpan Data" onClick={() => saveProfile()} />
                </div>
            </div>
        </section>
    );
}

export default EditProfile;
