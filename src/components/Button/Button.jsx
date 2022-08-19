import PropTypes from "prop-types";

export default function Button({ changeHandler, txt, bgColor }) {
  return (
    <button
      type="button"
      onClick={changeHandler}
      className={`rounded text-white bg-${bgColor}-500`}
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  txt: PropTypes.string.isRequired,
};

Button.defaultProps = {
  bgColor: "green",
};
