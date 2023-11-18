import CardTrack from './cards/CardTrack';

const TrackingContainer = () => {
  return (
    <div className="mt-14 flex flex-row flex-wrap justify-center align-middle gap-10">
      <CardTrack
        color={'text-yellow'}
        icon={'lemak-icon.svg'}
        percentase={'10%'}
        needed={'900'}
        value={100}
        name={'Lemak'}
      />
      <CardTrack
        color={'text-rose-400'}
        icon={'kalori-icon.svg'}
        percentase={'10%'}
        needed={'900'}
        value={100}
        name={'Kalori'}
      />
      <CardTrack
        color={'text-cyan-900'}
        icon={'protein-icon.svg'}
        percentase={'10%'}
        needed={'900'}
        value={100}
        name={'Protein'}
      />
      <CardTrack
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
