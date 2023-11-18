import { useState } from 'react';
import CardFood from '../components/cards/CardFood';
import Button from '../components/buttons/Button';
import Breadcrumb from '../components/Breadcrumb';

const FoodDetail = () => {
    const [showDescription, setshowDescription] = useState(true);
    const breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Nama Makanan', url: '#' },
    ];
    return (
        <>
            <main className='pt-20'>
                <div className="container 2xl:mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-1">
                        <div>
                            <img className='w-full' src="https://i.ibb.co/8s9c629/Foto-Makanan.png" alt="food" />
                        </div>
                        <div className="px-12 sm:px-[6.25%] md:px-4 md:py-5">
                            <Breadcrumb items={breadcrumbItems} />

                            <h1 className="text-2xl font-semibold text-navy">ini Nama Makanan</h1>
                            <ul className="flex pt-4 pb-2">
                                <li className={`me-4 pb-3 mb-3 cursor-pointer ${showDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
                                    <a onClick={() => setshowDescription(!showDescription)}>Description</a>
                                </li>
                                <li className={`me-4 pb-3 mb-3 cursor-pointer ${!showDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
                                    <a onClick={() => setshowDescription(!showDescription)}>Nutrisi Lengkap</a>
                                </li>
                            </ul>
                            <div className={`${!showDescription ? 'hidden' : ''}`}>
                                <p className='text-navy'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias atque at ea doloremque harum fugit? Dolores, aut molestias? Molestias, non. Impedit necessitatibus sint odit illum dolor consectetur voluptate excepturi.</p>

                                <h2 className="text-xl pt-4 text-navy font-semibold">Bahan-bahan</h2>
                                <p className='text-navy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod enim dolorem labore. Soluta quae corporis.</p>

                                <h2 className="text-xl pt-4 text-navy font-semibold">Nutrisi Utama</h2>
                                <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-4 gap-8 bg-slate-100 p-4 text-center rounded-lg">
                                    <div>
                                        <div className='text-navy'>
                                            <img src="/icons/cloud-meatball-solid.svg" className='inline me-2' />
                                            Lemak
                                        </div>
                                        <div className="font-semibold text-navy">1000 g</div>
                                        <div className="text-xs text-white-500">n% Harian</div>
                                    </div>
                                    <div>
                                        <div className='text-navy'>
                                            <img src="/icons/fire-solid.svg" className='inline me-2' />
                                            Kalori
                                        </div>
                                        <div className="font-semibold text-navy">1000 kkal</div>
                                        <div className="text-xs text-white-500">n% Harian</div>
                                    </div>
                                    <div>
                                        <div className='text-navy'>
                                            <img src="/icons/dna-solid.svg" className='inline me-2' />
                                            Protein
                                        </div>
                                        <div className="font-semibold text-navy">1000 g</div>
                                        <div className="text-xs text-white-500">n% Harian</div>
                                    </div>
                                    <div>
                                        <div className='text-navy'>
                                            <img src="/icons/wheat-awn-solid.svg" className='inline me-2' />
                                            Karbo
                                        </div>
                                        <div className="font-semibold text-navy">1000 g</div>
                                        <div className="text-xs text-white-500">n% Harian</div>
                                    </div>
                                </div>

                                <div className="pt-11">
                                    <button className="me-2 bg-orange border-orange hover:bg-orange-100 transition text-white border-2 rounded-lg p-1 px-3 font-semibold">Pilih Makanan</button>
                                    <button className="me-2 p-1 px-3 border-orange border-2 rounded-lg">
                                        <img src="/icons/love.svg" alt="Love Icon" className='inline' />
                                    </button>
                                </div>
                            </div>
                            <div className={`${showDescription ? 'hidden' : ''}`}>
                                <p className='text-navy'>Nutrisi lengkap, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias atque at ea doloremque harum fugit? Dolores, aut molestias? Molestias, non. Impedit necessitatibus sint odit illum dolor consectetur voluptate excepturi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-[6.25%] mx-auto mt-16">
                    <h2 className="text-xl font-bold mb-6 mt-16 text-navy">Makanan Serupa</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-3">
                        {Array.from({ length: 8 }, (_, index) => (
                            <CardFood key={index} name="Nama Makanan" description="Description..." fat="93" calorie="100" protein="80" carbohydrate="100" />
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Button buttonText={"Selengkapnya"} />
                    </div>
                </div>
            </main>
        </>
    );
}
export default FoodDetail;