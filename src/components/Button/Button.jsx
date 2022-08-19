import PropTypes from "prop-types";

export default function Button({ changeHandler, txt }) {
  return (
    <button type="button" onClick={changeHandler}>
      {txt}
    </button>
  );
}

Button.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  txt: PropTypes.string.isRequired,
};
