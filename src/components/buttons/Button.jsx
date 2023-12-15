import PropTypes from 'prop-types';

function Button({ buttonText }) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button className="font-medium text-sm bg-orange h-11 px-4 py-[10px] my-0 text-white rounded-lg transition-all duration-300 hover:bg-orange-100">
            {buttonText}
        </button>
    );
}

Button.propTypes = {
    // eslint-disable-next-line react/require-default-props
    buttonText: PropTypes.string,
};

export default Button;
