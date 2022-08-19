import PropTypes from "prop-types";

export default function Button({ changeHandler }) {
  return (
    <button type="button" onClick={changeHandler}>
      Click me
    </button>
  );
}

Button.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
