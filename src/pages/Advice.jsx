/* eslint-disable max-len */
function Advice() {
    return (
        <>
            <section className="px-[6.25%] flex pt-24 justify-between">
                <div className="w-[51%] tab:w-full ">
                    <h1 className="text-4xl sm:text-mobile-4xl font-bold text-navy">
                    Temukan Jalan Menuju
{' '}
<span className="text-orange">Gaya Hidup Sehat</span>
                        {' '}
                    dan
{' '}
                        <span className="text-orange">Berat Badan Ideal</span>
                    </h1>
                    <div className="hidden tab:grid place-content-center mt-4">
                        <img src="/images/ilustrasi-advice.svg" alt="" />
                    </div>
                    <p className="text-navy opacity-80 mt-4 leading-[30px]">
                    Apakah Anda sedang mencari panduan praktis untuk mencapai berat badan yang sehat dan optimal? Selamat, Anda berada di tempat
                    yang tepat! Halaman ini dirancang khusus untuk memberikan saran-saran berharga yang akan membantu Anda mengelola berat badan
                    dengan cara yang efektif dan berkelanjutan.
                    </p>
                </div>
                <div className="w-[48%] grid place-content-center tab:hidden">
                    <img src="/images/ilustrasi-advice.svg" alt="" />
                </div>
            </section>
            <section className="px-[6.25%] pt-20 text-navy flex gap-5 sm:flex-col">
                <div className="w-[50%] sm:w-full">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold">
                        Panduan
{' '}
<span className="text-orange"> Makan Sehat</span>
                        </h2>
                        <p className="opacity-90 leading-[30px]">
                        Pelajari cara menyusun rencana makan seimbang yang memberikan nutrisi optimal untuk tubuh Anda.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-14 h-14 grid place-content-center  shadow-[0px_0px_24px_0px_rgba(0,0,0,0.15)] rounded-md">
                            <img className="w-9 h-9 aspect-square" src="/icons/advice/varietas.svg" alt="Varietas Nutrisi" />
                        </div>
                        <div className="w-[85.5%] text-navy">
                            <h3 className="text-2xl font-semibold">Varietas Nutrisi</h3>
                            <p className="opacity-90 leading-[30px]">
                            Sertakan berbagai jenis makanan yang mengandung karbohidrat, protein, lemak sehat, serat, vitamin, dan mineral. Ini
                            membantu memastikan tubuh menerima semua nutrisi yang diperlukan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] sm:w-full">
                    <div className="flex gap-4 mb-6">
                        <div className="w-14 h-14 grid place-content-center  shadow-[0px_0px_24px_0px_rgba(0,0,0,0.15)] rounded-md">
                            <img className="w-9 h-9 aspect-square" src="/icons/advice/frekuensi.svg" alt="Frekuensi" />
                        </div>
                        <div className="w-[85.5%] text-navy ">
                            <h3 className="text-2xl font-semibold">Frekuensi Makan</h3>
                            <p className="opacity-90 leading-[30px]">
                            Terapkan pola makan yang teratur dengan 3-4 kali makan sehari dan perencanaan camilan sehat. Hindari melewatkan
                            makanan untuk menjaga metabolisme tetap aktif.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-14 h-14 grid place-content-center  shadow-[0px_0px_24px_0px_rgba(0,0,0,0.15)] rounded-md">
                            <img className="w-9 h-9 aspect-square" src="/icons/advice/air-mineral.svg" alt="Air Mineral" />
                        </div>
                        <div className="w-[85.5%] text-navy ">
                            <h3 className="text-2xl font-semibold">Air Putih</h3>
                            <p className="opacity-90 leading-[30px]">
                            Pastikan untuk minum cukup air setiap hari. Air membantu pencernaan, menjaga kelembapan kulit, dan membantu mengurangi
                            keinginan makan berlebihan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-[6.25%] pt-20 text-navy">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold">
                    Tips
{' '}
<span className="text-orange">Pengendalian</span>
                        {' '}
                    Porsi
                    </h2>
                    <p className="opacity-90 leading-[30px]">
                    Pelajari strategi sederhana untuk mengontrol porsi makan dan menghindari makan berlebihan.
{' '}
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-5 tab:grid-cols-2 sm:grid-cols-1">
                    <div className="p-6 shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] rounded-[10px]">
                        <div className="flex justify-between pb-2 mb-3 border-b-[1px] border-white-300">
                            <h3 className="text-xl font-semibold">Piring Kecil</h3>
                            <img src="/icons/advice/plate.svg" alt="Icon Piring" />
                        </div>
                        <p className="opacity-90 leading-[30px]">
                        Gunakan piring yang lebih kecil untuk membantu mengontrol porsi makan. Ini memberi sinyal otak bahwa porsi sudah cukup.
                        </p>
                    </div>
                    <div className="p-6 shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] rounded-[10px]">
                        <div className="flex justify-between pb-2 mb-3 border-b-[1px] border-white-300">
                            <h3 className="text-xl font-semibold">Makanan Berkualitas</h3>
                            <img src="/icons/advice/quality.svg" alt="Icon Berkualitas" />
                        </div>
                        <p className="opacity-90 leading-[30px]">
                        Pilih makanan yang kaya nutrisi sehingga Anda merasa kenyang lebih lama. Hindari camilan tinggi gula dan lemak yang tidak
                        memberikan rasa kenyang.
                        </p>
                    </div>
                    <div className="p-6 shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] rounded-[10px] tab:col-span-2 sm:col-span-1">
                        <div className="flex justify-between pb-2 mb-3 border-b-[1px] border-white-300">
                            <h3 className="text-xl font-semibold">Pola Makan Sadar</h3>
                            <img src="/icons/advice/eat.svg" alt="Icon Makan" />
                        </div>
                        <p className="opacity-90 leading-[30px]">
                        Makan dengan penuh perhatian dan nikmati setiap suapan. Ini membantu mengurangi kecenderungan untuk makan berlebihan
                        secara tidak sadar.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-[6.25%] pt-20 text-navy ">
                <div className="border-[1.5px] border-white-400/60 p-12 rounded-[1.25rem]">
                    <div className="mb-12 text-center w-[64%] tab:w-[80%] sm:w-[98%] mx-auto">
                        <h2 className="text-3xl font-bold">
                        Rutinitas
{' '}
<span className="text-orange">Aktivitas Fisik</span>
                        </h2>
                        <p className="opacity-90 leading-[30px]">
                        Temukan cara menyenangkan untuk meningkatkan aktivitas fisik Anda, sesuai dengan preferensi dan gaya hidup Anda.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-1">
                        <div className="flex gap-4 mb-6">
                            <div className="w-14 h-14 grid place-content-center  border-[1.5px] border-white-400/60 rounded-md">
                                <img className="w-9 h-9 aspect-square" src="/icons/advice/kalender.svg" alt="Icon Kalender" />
                            </div>
                            <div className="w-[85.5%] text-navy ">
                                <h3 className="text-2xl font-semibold">Integrasikan ke Dalam Rutinitas Harian</h3>
                                <p className="opacity-90 leading-[30px]">
                                Jadwalkan waktu untuk beraktivitas fisik seperti janji dokter atau pertemuan bisnis. Ini membantu membuat
                                aktivitas fisik menjadi bagian alami dari rutinitas harian.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <div className="w-14 h-14 grid place-content-center  border-[1.5px] border-white-400/60 rounded-md">
                                <img className="w-9 h-9 aspect-square" src="/icons/advice/konsisten.svg" alt="Icon Konsisten" />
                            </div>
                            <div className="w-[85.5%] text-navy ">
                                <h3 className="text-2xl font-semibold">Bertahap dan Konsisten</h3>
                                <p className="opacity-90 leading-[30px]">
                                Mulailah dengan tingkat intensitas yang sesuai dengan kondisi fisik Anda, dan tingkatkan secara bertahap.
                                Konsistensi lebih penting daripada intensitas yang tinggi.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <div className="w-14 h-14 grid place-content-center  border-[1.5px] border-white-400/60 rounded-md">
                                <img className="w-9 h-9 aspect-square" src="/icons/advice/aktivitas.svg" alt="Icon aktivitas" />
                            </div>
                            <div className="w-[85.5%] text-navy ">
                                <h3 className="text-2xl font-semibold">Pilih Aktivitas yang Anda Nikmati</h3>
                                <p className="opacity-90 leading-[30px]">
                                Temukan jenis olahraga atau aktivitas fisik yang Anda nikmati, apakah itu berjalan, bersepeda, berenang, atau
                                rutinitas kebugaran di rumah. Ini membuatnya lebih mungkin untuk dijalani secara konsisten.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <div className="w-14 h-14 grid place-content-center  border-[1.5px] border-white-400/60 rounded-md">
                                <img className="w-9 h-9 aspect-square" src="/icons/advice/hobby.svg" alt="Icon hobby" />
                            </div>
                            <div className="w-[85.5%] text-navy ">
                                <h3 className="text-2xl font-semibold">Jelajahi Berbagai Aktivitas</h3>
                                <p className="opacity-90 leading-[30px]">
                                Cobalah berbagai jenis aktivitas fisik untuk mencegah kebosanan dan mempertahankan motivasi. Aktivitas bervariasi
                                membantu melibatkan berbagai kelompok otot dan memberikan manfaat kesehatan yang holistik.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-[6.25%] pt-20 text-navy">
                <div className="mb-12 w-[75%] sm:w-full">
                    <h2 className="text-3xl font-bold">
                    Gaya
{' '}
<span className="text-orange">Hidup Sehat</span>
                    </h2>
                    <p className="opacity-90 leading-[30px]">
                    Dapatkan wawasan tentang perubahan gaya hidup jangka panjang yang akan membantu Anda mencapai tujuan berat badan Anda.
                    </p>
                </div>
                <div className="grid grid-cols-3 tab:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="p-6 shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] rounded-[10px]">
                        <img className="w-12 h-12 aspect-square" src="/icons/advice/rencana.svg" alt="Icon Rencana" />
                        <div>
                            <h3 className="text-xl font-semibold mt-4 mb-2">Rencanakan Menu Makanan</h3>
                            <p className="opacity-90 leading-[30px]">
                            Buat rencana menu makanan mingguan untuk memastikan Anda memiliki bahan makanan sehat dan menghindari godaan makanan
                            yang tidak sehat.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] rounded-[10px]">
                        <img className="w-12 h-12 aspect-square" src="/icons/advice/stress.svg" alt="Icon Stress" />
                        <div>
                            <h3 className="text-xl font-semibold mt-4 mb-2">Manajemen Stres</h3>
                            <p className="opacity-90 leading-[30px]">
                            Temukan teknik manajemen stres yang cocok untuk Anda, seperti meditasi, yoga, atau berjalan-jalan. Stres dapat
                            memengaruhi pola makan, sehingga manajemen stres penting.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 shadow-[0px_0px_44px_-5px_rgba(0,0,0,0.10)] rounded-[10px] tab:col-span-2 sm:col-span-1">
                        <img className="w-12 h-12 aspect-square" src="/icons/advice/tidur.svg" alt="Icon Tidur" />
                        <div>
                            <h3 className="text-xl font-semibold mt-4 mb-2">Tidur Yang Cukup</h3>
                            <p className="opacity-90 leading-[30px]">
                            Pastikan untuk mendapatkan tidur yang cukup setiap malam. Tidur yang baik mendukung keseimbangan hormon dan
                            pengendalian nafsu makan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-[6.25%] py-20 text-navy">
                <div className="mb-12 w-[75%] sm:w-full">
                    <h2 className="text-3xl font-bold">
                        <span className="text-orange">Dukungan</span>
                        {' '}
                    Sosial
                    </h2>
                    <p className="opacity-90 leading-[30px]">
                    Dapatkan wawasan tentang perubahan gaya hidup jangka panjang yang akan membantu Anda mencapai tujuan berat badan Anda.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex border-[1px] border-white-400 rounded-lg overflow-hidden sm:flex-col">
                        <div className="w-[20%] tab:w-[35%] sm:w-full sm:h-[200px]">
                            <img
                                className="w-full h-full object-cover sm:object-center"
                                src="/images/bagikan-tujuan.png"
                                alt="Ilustrasi Bagikan Tujuan"
                            />
                        </div>
                        <div className="p-6 w-[80%] tab:w-[65%] sm:w-full">
                            <h3 className="text-xl font-semibold mb-[10px]">Bagikan Tujuan Anda</h3>
                            <p className="opacity-90 leading-[30px]">
                            Berbicaralah secara terbuka dengan teman, keluarga, atau teman olahraga tentang tujuan penurunan berat badan Anda.
                            Mendiskusikan tujuan Anda membantu menciptakan akunabilitas dan dukungan mereka dapat memberikan motivasi tambahan.
                            </p>
                        </div>
                    </div>
                    <div className="flex border-[1px] border-white-400 rounded-lg overflow-hidden sm:flex-col">
                        <div className="w-[20%] tab:w-[35%] sm:w-full sm:h-[200px]">
                            <img className="w-full h-full object-cover sm:object-center" src="/images/komunitas.png" alt="Ilustrasi Komunitas" />
                        </div>
                        <div className="p-6 w-[80%] tab:w-[65%] sm:w-full">
                            <h3 className="text-xl font-semibold mb-[10px]">Gabung Komunitas Sehat</h3>
                            <p className="opacity-90 leading-[30px]">
                            Bergabunglah dengan kelompok atau komunitas online yang memiliki tujuan serupa. Melalui pertukaran pengalaman dan
                            dukungan di platform tersebut, Anda dapat memperoleh inspirasi baru, tips, dan rasa solidaritas dalam perjalanan
                            penurunan berat badan Anda.
                            </p>
                        </div>
                    </div>
                    <div className="flex border-[1px] border-white-400 rounded-lg overflow-hidden sm:flex-col">
                        <div className="w-[20%] tab:w-[35%] sm:w-full sm:h-[200px]">
                            <img className="w-full h-full object-cover sm:object-center" src="/images/keluarga.png" alt="Ilustrasi Keluarga" />
                        </div>
                        <div className="p-6 w-[80%] tab:w-[65%] sm:w-full">
                            <h3 className="text-xl font-semibold mb-[10px]">Libatkan Keluarga</h3>
                            <p className="opacity-90 leading-[30px]">
                            Ajak keluarga Anda untuk ikut serta dalam perubahan gaya hidup sehat. Melibatkan keluarga tidak hanya menciptakan
                            lingkungan yang mendukung di rumah tetapi juga membuat perjalanan penurunan berat badan menjadi pengalaman positif
                            bersama-sama.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Advice;
