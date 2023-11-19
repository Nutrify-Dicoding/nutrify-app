import CardTrackStats from '../cards/CardTrackStats';

const TrackingContainer = () => {
  return (
    <div className="mt-14  flex flex-row flex-wrap justify-center align-middle gap-10">
      <CardTrackStats
        color={'text-yellow'}
        icon={'lemak-icon.svg'}
        percentase={'10%'}
        needed={'900'}
        value={100}
        name={'Lemak'}
      />
      <CardTrackStats
        color={'text-rose-400'}
        icon={'kalori-icon.svg'}
        percentase={'10%'}
        needed={'900'}
        value={100}
        name={'Kalori'}
      />
      <CardTrackStats
        color={'text-cyan-900'}
        icon={'protein-icon.svg'}
        percentase={'10%'}
        needed={'900'}
        value={100}
        name={'Protein'}
      />
      <CardTrackStats
        color={'text-orange'}
        icon={'carbo-icon.svg'}
        percentase={'10%'}
        needed={'900'}
        value={100}
        name={'Karbohidrat'}
      />
    </div>
  );
};

export default TrackingContainer;
