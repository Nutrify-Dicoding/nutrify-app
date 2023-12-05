import { useSelector } from "react-redux";
import Breadcrumb from "../components/Breadcrumb"
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceholderCardFood from "../components/placeholder/PlaceholderCardFood";
import CardFood from "../components/cards/CardFood";

const Favorite = () => {
    const breadcrumbItems = [
        { label: 'Profile', url: '/profile' },
        { label: 'Favorit', url: '/favorite' },
    ];
    const [favorite, setFavorite] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const token = useSelector((state) => state.auth.token)
    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };
        setIsFetching(true);
        axios.get('/favorite', config)
            .then((res) => {
                console.log(res.data)
                if (res.status === 201) setFavorite(res.data.body)
            }).finally(() => {
                setIsFetching(false);
            })
    }, [token])
    return (
        <section className="pt-24 px-[6.25%] text-navy mb-20 sm:mb-12">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="font-semibold pb-2 text-xl">Makanan Favorit Pilihanmu</h1>
            <div className="w-full grid grid-cols-4 gap-5 mt-3 tab:grid-cols-3 md:grid-cols-2" id='list-food'>
                {favorite.map((item, index) => {
                    return <CardFood key={index} id={item.food._id} name={item.food.name} description={item.food.desc} fat={item.food.fat} calorie={item.food.cal} protein={item.food.protein} carbohydrate={item.food.carb} image={item.food.image.includes('http') ? item.food.image : 'https://picsum.photos/265/150'} />;
                })}
                {/* If there are no favorite */}
                {favorite.length === 0 && isFetching !== true && (
                    <div className="col-span-4 flex justify-center py-8 items-center w-4/12 lg:w-1/2 md:w-full mx-auto">
                        <div className="text-darknavy">
                            <h3 className="text-lg font-semibold text-center">Anda belum menambahkan makanan ke daftar favorit.</h3>
                        </div>
                    </div>
                )}

                {/* While the data is being retrieved */}
                {isFetching &&
                    [...Array(8)].map((_, i) => {
                        return (
                            <PlaceholderCardFood key={i} />
                        );
                    })}
            </div>

        </section>
    )
}

export default Favorite