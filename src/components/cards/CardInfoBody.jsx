/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

// eslint-disable-next-line consistent-return
const colourValue = (title, bodyValue, bodyText) => {
	if (title === 'Body Mass Index (BMI)') {
		if (bodyValue >= 18.5 && bodyValue <= 24.9) {
			return 'text-green';
		}
		return 'text-red';
	}
	if (title === 'Berat Badan Ideal') {
		if (bodyText === 'Tidak Ideal') {
			return 'text-red';
		}
		return 'text-green';
	}
};

function CardInfoBody({
		icon, title, bodyText, bodyValue, advice,
	}) {
	return (
		<div className="w-full p-5 border-[1px] flex justify-between gap-2 rounded-2xl">
			<div className="w-[80%]">
				<div className="flex mb-4">
					<img src={`/icons/${icon}`} alt={`Icon ${title}`} />
					<h3 className="ml-3 text-xl sm:text-mobile-xl font-semibold text-navy">{title}</h3>
				</div>
				<div className="hidden my-0 mb-4 w-full mx-auto sm:grid place-content-center bg-white-100 px-4 py-[10px] rounded-xl">
					<p className={`${colourValue(title, bodyValue, bodyText)} text-4xl sm:text-mobile-4xl font-semibold`}>{bodyValue}</p>
				</div>
				<div>
					<p className="text-white-500">
						<span
							dangerouslySetInnerHTML={{
								__html: advice.replace(bodyText, `<span class="${colourValue(title, bodyValue, bodyText)} font-semibold">${bodyText}</span>`),
							}}
						/>
						{' '}
						Kunjungi halaman
						<span className="text-navy font-semibold">
							<Link to="/advice"> berikut.</Link>
						</span>
					</p>
				</div>
			</div>
			<div className="w-20 h-full grid place-content-center">
				<div className="w-20 h-20 grid place-content-center bg-white-100 rounded-full sm:hidden">
					<p className={`${colourValue(title, bodyValue, bodyText)} text-4xl sm:text-mobile-4xl font-semibold`}>{bodyValue}</p>
				</div>
			</div>
		</div>
	);
}

export default CardInfoBody;
