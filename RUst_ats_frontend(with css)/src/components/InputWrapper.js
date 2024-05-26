import "./InputWrapper.css";

const InputWrapper = ({ className = "" }) => {
  return (
    <div className={`input-wrapper ${className}`}>
      <div className="input-field1">
        <img className="mappin-icon" alt="" src="/mappin.svg" />
        <div className="city-state-or">City, state or zip code</div>
      </div>
    </div>
  );
};

InputWrapper.propTypes = {
  className: PropTypes.string,
};

export default InputWrapper;
