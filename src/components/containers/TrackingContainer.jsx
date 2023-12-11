import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CardTrackStats from '../cards/CardTrackStats';

function TrackingContainer() {
    const [nutritionTotal, setNutritionTotal] = useState({
        totCal: 0,
        totCarb: 0,
        totProtein: 0,
        totFat: 0,
    });
    const userInfo = useSelector((state) => state.auth.userInfo);
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios.get('/track/today', config).then((res) => {
            if (res.status === 200 && res.data) {
                setNutritionTotal(res.data.body.result);
            }
        });
    }, [token]);
    return (
        <div className="mt-6 grid grid-cols-4 gap-5 lg:grid-cols-2 sm:grid-cols-1">
            <CardTrackStats
                color="text-yellow"
                icon="lemak-icon.svg"
                percentase={`${parseInt((nutritionTotal.totFat ?? 0) / userInfo.fatNeeded * 100)}%`}
                needed={parseInt(userInfo.fatNeeded - (nutritionTotal.totFat ?? 0))}
                value={parseInt(userInfo.fatNeeded - (nutritionTotal.totFat ?? 0))}
                name="Lemak"
            />
            <CardTrackStats
                color="text-rose-400"
                icon="kalori-icon.svg"
                percentase={`${parseInt((nutritionTotal.totCal ?? 0) / userInfo.caloriNeeded * 100)}%`}
                needed={parseInt(userInfo.caloriNeeded - (nutritionTotal.totCal ?? 0))}
                value={parseInt(userInfo.caloriNeeded - (nutritionTotal.totCal ?? 0))}
                name="Kalori"
            />
            <CardTrackStats
                color="text-cyan-900"
                icon="protein-icon.svg"
                percentase={`${parseInt((nutritionTotal.totProtein ?? 0) / userInfo.proteinNeeded * 100)}%`}
                needed={parseInt(userInfo.proteinNeeded - (nutritionTotal.totProtein ?? 0))}
                value={parseInt(userInfo.proteinNeeded - (nutritionTotal.totProtein ?? 0))}
                name="Protein"
            />
            <CardTrackStats
                color="text-orange"
                icon="carbo-icon.svg"
                percentase={`${parseInt((nutritionTotal.totCarb ?? 0) / userInfo.carboNeeded * 100)}%`}
                needed={parseInt(userInfo.carboNeeded - (nutritionTotal.totCarb ?? 0))}
                value={parseInt(userInfo.carboNeeded - (nutritionTotal.totCarb ?? 0))}
                name="Karbohidrat"
            />
        </div>
    );
}

export default TrackingContainer;
