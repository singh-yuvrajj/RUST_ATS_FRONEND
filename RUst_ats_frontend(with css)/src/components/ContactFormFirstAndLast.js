import { useMemo } from "react";
import "./ContactFormFirstAndLast.css";

const ContactFormFirstAndLast = ({
  className = "",
  firstName,
  lastName,
  propWidth,
  propDisplay,
  propWidth1,
  propFlex,
}) => {
  const firstNameStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const lastNameAndEmailInputStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const lastNameStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={`contact-form-first-and-last ${className}`}>
      <div className="first-name-and-number">
        <b className="first-name" style={firstNameStyle}>
          {firstName}
        </b>
        <div className="first-name-and-number-child" />
      </div>
      <div className="last-name-and-email">
        <div
          className="last-name-and-email-input"
          style={lastNameAndEmailInputStyle}
        >
          <b className="last-name" style={lastNameStyle}>
            {lastName}
          </b>
        </div>
        <div className="last-name-and-email-child" />
      </div>
    </div>
  );
};

ContactFormFirstAndLast.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex: PropTypes.any,
};

export default ContactFormFirstAndLast;
