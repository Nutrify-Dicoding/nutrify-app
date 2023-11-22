import PropTypes from 'prop-types';

const Button = ({ buttonText }) => {
	return (
		<button className="font-medium text-sm bg-orange h-11 px-4 py-[10px] my-0 text-white rounded-lg transition-all duration-300 hover:bg-orange-100">
			{buttonText}
		</button>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string,
};

export default Button;
