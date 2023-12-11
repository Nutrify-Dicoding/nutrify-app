/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../components/Breadcrumb';
import Recommendation from '../components/Recommendation';
import Button from '../components/buttons/Button';
import { setSelectedFood } from '../redux/slices/selectedFoodSlice';

function FoodDetail() {
    const { food_id } = useParams();
    const [showDescription, setshowDescription] = useState(true);
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);
    const [foodDetail, setFoodDetail] = useState({});
    const [favorited, setFavorited] = useState(false);
    const [favoriteID, setFavoriteID] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.auth.token);
    const userId = useSelector((state) => state.auth.userInfo._id);
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request1 = axios.get(`/foods/${food_id}`, config);
        const request2 = axios.get('/favorite', config);
        axios.all([request1, request2])
            .then(axios.spread((response1, response2) => {
                if (response1.status === 200 && response1.data) {
                    setFoodDetail(response1.data);
                    setBreadcrumbItems([
                        { label: 'Home', url: '/' },
                        { label: response1.data.name, url: '#' },
                    ]);
                }
                if (response2.status === 200 && response1.status === 200 && response2.data) {
                    const food_id = response1.data._id;
                    // console.log(response2.data, 'response2')
                    if (response2.data.body.filter((favorite) => favorite.food._id === food_id).length > 0) {
                        const favorite = response2.data.body.filter((favorite) => favorite.food._id === food_id)[0];
                        setFavoriteID(favorite._id);
                        setFavorited(true);
                    }
                }
            }))
            .catch((err) => {
                if (axios.isAxiosError(err) && err.response && err.response.status === 404) {
                    navigate('/404');
                } else {
                    // console.log(err);
                }
            });
    }, [food_id, dispatch, navigate, token]);

    const toogleFavorite = () => {
        const formData = {
            food: food_id,
            user: userId,
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const request = favorited
            ? axios.delete(`/favorite/${favoriteID}`, config)
            : axios.post('/favorite', formData, config);
        request
            .then((res) => {
                if (res.status === 200 && res.data) {
                    setFavorited(!favorited);
                    if (res.data.body.favorite) {
                        setFavoriteID(res.data.body.favorite);
                    }
                }
            });
    };
    const selectFood = () => {
        dispatch(setSelectedFood({
            food_id: foodDetail._id,
            name: foodDetail.name,
            image: foodDetail.image,
            fat: foodDetail.fat,
            carb: foodDetail.carb,
            protein: foodDetail.protein,
            cal: foodDetail.cal,
        }));
        navigate('/track');
    };
    return (
        <section className="pt-20">
            <div className="2xl:mx-auto">
                <div className="w-full flex tab:flex-col">
                    <div className="w-[50%] lg:w-[45%] tab:w-full tab:h-[400px] aspect-video">
                        <img className="h-full w-full object-cover" src={foodDetail.image} alt="food" />
                    </div>
                    <div className="w-[50%] lg:w-[55%] tab:w-full pr-[6.25%] tab:px-[6.25%] pl-16 sm:px-[6.25%] md:py-5">
                        <Breadcrumb items={breadcrumbItems} />

                        <h1 className="text-3xl font-semibold text-navy">{foodDetail.name ?? ''}</h1>
                        <ul className="flex mb-5 pt-4 border-b-[1.5px] border-white-100">
                            <li className={`me-4 pb-3 cursor-pointer ${showDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
                                <button type="button" onClick={() => setshowDescription(!showDescription)}>Description</button>
                            </li>
                            <li className={`me-4 pb-3 cursor-pointer ${!showDescription ? 'border-b-2 border-b-orange text-navy' : ''}`}>
                                <button type="button" onClick={() => setshowDescription(!showDescription)}>Nutrisi Lengkap</button>
                            </li>
                        </ul>
                        <div className={`${!showDescription ? 'hidden' : ''}`}>
                            <p className="text-navy">
                                {foodDetail.desc ?? ''}
                            </p>

                            <h2 className="text-xl mt-4 mb-2 text-navy font-semibold">Bahan-bahan</h2>
                            <p className="text-navy">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod enim dolorem labore. Soluta quae corporis.
                            </p>

                            <h2 className="text-xl mb-4 mt-4 text-navy font-semibold">Nutrisi Utama</h2>
                            <div className="grid  grid-cols-4 lg:grid-cols-2 tab:grid-cols-4 sm:grid-cols-2 gap-8 bg-slate-100 p-4 text-center rounded-lg border-b-[1.5px] border-white-100 ">
                                <div>
                                    <div className="text-navy">
                                        <img src="/icons/cloud-meatball-solid.svg" className="inline me-2" alt="lemak" />
                                        Lemak
                                    </div>
                                    <div className="font-semibold text-navy">
                                        {foodDetail.fat ?? 0}
                                        {' '}
                                        g
                                    </div>
                                    <div className="text-xs text-white-500">n% Harian</div>
                                </div>
                                <div>
                                    <div className="text-navy">
                                        <img src="/icons/fire-solid.svg" className="inline me-2" alt="kalori" />
                                        Kalori
                                    </div>
                                    <div className="font-semibold text-navy">
                                        {foodDetail.cal ?? 0}
                                        {' '}
                                        kkal
                                    </div>
                                    <div className="text-xs text-white-500">n% Harian</div>
                                </div>
                                <div>
                                    <div className="text-navy">
                                        <img src="/icons/dna-solid.svg" className="inline me-2" alt="protein" />
                                        Protein
                                    </div>
                                    <div className="font-semibold text-navy">
                                        {foodDetail.protein ?? 0}
                                        {' '}
                                        g
                                    </div>
                                    <div className="text-xs text-white-500">n% Harian</div>
                                </div>
                                <div>
                                    <div className="text-navy">
                                        <img src="/icons/wheat-awn-solid.svg" className="inline me-2" alt="karbohidrat" />
                                        Karbo
                                    </div>
                                    <div className="font-semibold text-navy">
                                        {foodDetail.carb ?? 0}
                                        {' '}
                                        g
                                    </div>
                                    <div className="text-xs text-white-500">n% Harian</div>
                                </div>
                            </div>

                            <div className="pt-11 flex items-center tab:justify-end">
                                <div onClick={() => { selectFood(); }}>
                                    <Button buttonText="Pilih Makanan" />
                                </div>
                                <button type="button" className="me-2 ml-4 py-2 px-3 border-orange border-2 rounded-lg" onClick={() => toogleFavorite()}>
                                    <img src={favorited ? '/icons/love-full.svg' : '/icons/love.svg'} alt="Love Icon" className="inline" />
                                </button>
                            </div>
                        </div>
                        <div className={`${showDescription ? 'hidden' : ''}`}>
                            <p className="text-navy">
                                Nutrisi lengkap, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias atque at ea doloremque
                                harum fugit? Dolores, aut molestias? Molestias, non. Impedit necessitatibus sint odit illum dolor consectetur
                                voluptate excepturi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-[6.25%] mx-auto mt-16">
                <Recommendation />
            </div>
        </section>
    );
}
export default FoodDetail;
