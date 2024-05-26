import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  propPadding,
  propHeight,
  propPadding1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const softwareEngineerJobContainerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const innerImageStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={`jobprofile-group ${className}`} style={groupDivStyle}>
      <div className="jobprofile2" />
      <p
        className="software-engineer-job-container2"
        style={softwareEngineerJobContainerStyle}
      >
        <span className="software-engineer4">
          <span className="software-engineer5">Software Engineer</span>
        </span>
        <span className="job-id-12xxx2">
          <span>Job Id: 12XXX</span>
        </span>
        <span className="location2">
          <span>{`Location: `}</span>
        </span>
        <span className="company2">
          <span>{`Company: `}</span>
        </span>
      </p>
      <div className="image-wrapper">
        <div className="inner-image" style={innerImageStyle}>
          <div className="inner-image-child" />
          <img
            className="image-5-icon"
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default GroupComponent;
