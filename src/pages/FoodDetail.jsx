import { useState } from 'react';
// import AppBar from '../components/AppBar';
import CardFood from '../components/cards/CardFood';
import Button from '../components/buttons/Button';

const FoodDetail = () => {
    const [isDescription, setIsDescription] = useState(true);
    return (
        <>
            <main className='pt-20'>
                <div>
                    <div className="container 2xl:mx-auto">
                        <div className="md:grid md:grid-cols-2">
                            <div>
                                <img className='w-full' src="https://i.ibb.co/8s9c629/Foto-Makanan.png" alt="food" />
                            </div>
                            <div className="px-3 md:py-5 lg:px-5">
                                <nav className="p-4 ps-0">
                                    <ol className="list-reset flex text-grey-dark">
                                        <li><a href="#" className="text-gray-400 hover:text-gray-600 transition">Home</a></li>
                                        <li className="mx-2 text-gray-400">&gt;</li>
                                        <li><a href="#" className="text-gray-400 hover:text-gray-600 transition">Nama Makanan</a></li>
                                    </ol>
                                </nav>

                                <h1 className="text-2xl font-semibold text-navy">ini Nama Makanan</h1>
                                <ul className="flex pt-4 pb-2">
                                    <li className={`me-4 pb-3 mb-3 cursor-pointer ${isDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
                                        <a onClick={() => setIsDescription(!isDescription)}>Description</a>
                                    </li>
                                    <li className={`me-4 pb-3 mb-3 cursor-pointer ${!isDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
                                        <a onClick={() => setIsDescription(!isDescription)}>Nutrisi Lengkap</a>
                                    </li>
                                </ul>
                                <div className={`${!isDescription ? 'hidden' : ''}`}>
                                    <p className='text-navy'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias atque at ea doloremque harum fugit? Dolores, aut molestias? Molestias, non. Impedit necessitatibus sint odit illum dolor consectetur voluptate excepturi.</p>

                                    <h2 className="text-xl pt-4 text-navy font-semibold">Bahan-bahan</h2>
                                    <p className='text-navy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod enim dolorem labore. Soluta quae corporis.</p>

                                    <h2 className="text-xl pt-4 text-navy font-semibold">Nutrisi Utama</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-100 p-4 text-center rounded-lg">
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
                                            <img src="/icons/love.svg" alt="Love Icon" className='inline'/>
                                        </button>
                                    </div>
                                </div>
                                <div className={`${isDescription ? 'hidden' : ''}`}>
                                    <p className='text-navy'>Nutrisi lengkap, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias atque at ea doloremque harum fugit? Dolores, aut molestias? Molestias, non. Impedit necessitatibus sint odit illum dolor consectetur voluptate excepturi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mt-10 px-3">
                        <h2 className="text-xl font-bold mb-6 mt-16 text-navy">Makanan Serupa</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {Array.from({ length: 8 }, (_, index) => (
                                <CardFood key={index} name="Nama Makanan" description="Description..." fat="93" calorie="100" protein="80" carbohydrate="100" />
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            {/* <button className="me-2 bg-orange hover:bg-orange-100 border-orange border-2 rounded-lg p-1 px-3 text-white font-semibold">Selengkapnya</button> */}
                            <Button buttonText={"Selengkapnya"} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </main>
        </>
    );
}
export default FoodDetail;